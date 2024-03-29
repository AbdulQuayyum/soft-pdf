'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { useResizeDetector } from 'react-resize-detector'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  TbLoader3,
  TbArrowBigUpLines,
  TbArrowBigDownLines,
  TbSearch,
  TbRotateClockwise,
} from 'react-icons/tb'
import SimpleBar from 'simplebar-react'

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { useToast } from './ui/use-toast'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { cn } from '@/Utilities/Utilities'
import PDFFullScreen from './PDFFullScreen'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface PdfRendererProps {
  url: string
}

const PDFRenderer = ({ url }: PdfRendererProps) => {
  const { toast } = useToast()
  const { width, ref } = useResizeDetector()
  const [numPages, setNumPages] = useState<number>()
  const [currPage, setCurrPage] = useState<number>(1)
  const [scale, setScale] = useState<number>(1)
  const [rotation, setRotation] = useState<number>(0)
  const [renderedScale, setRenderedScale] = useState<number | null>(null)

  const isLoading = renderedScale !== scale

  const CustomPageValidator = z.object({
    page: z
      .string()
      .refine((num) => Number(num) > 0 && Number(num) <= numPages!),
  })

  type TCustomPageValidator = z.infer<typeof CustomPageValidator>

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCustomPageValidator>({
    defaultValues: {
      page: '1',
    },
    resolver: zodResolver(CustomPageValidator),
  })

  const handlePageSubmit = ({ page }: TCustomPageValidator) => {
    setCurrPage(Number(page))
    setValue('page', String(page))
  }

  console.log(errors)

  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center">
      <div className="h-20 sm:h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            aria-label="previous page"
            disabled={currPage <= 1}
            onClick={() => {
              setCurrPage((prev) => (prev - 1 > 1 ? prev - 1 : 1))
              setValue('page', String(currPage - 1))
            }}
          >
            <TbArrowBigDownLines className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1.5">
            <Input
              type="tel"
              {...register('page')}
              className={cn(
                'w-12 h-8',
                errors.page && 'focus-visible:ring-red-500',
              )}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(handlePageSubmit)()
                }
              }}
            />
            <p className="text-zinc-700 text-sm space-x-1">
              <span>/</span>
              <span>{numPages ?? 'x'}</span>
            </p>
          </div>
          <Button
            variant="ghost"
            aria-label="next page"
            disabled={numPages === undefined || currPage === numPages}
            onClick={() => {
              setCurrPage((prev) =>
                prev + 1 > numPages! ? numPages! : prev + 1,
              )
              setValue('page', String(currPage + 1))
            }}
          >
            <TbArrowBigUpLines className="h-4 w-4" />
          </Button>
        </div>

        <div className="items-center flex flex-col sm:flex-row space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-1.5" aria-label="zoom" variant="ghost">
                <TbSearch className="h-4 w-4" />
                {scale * 100}%
                <TbArrowBigDownLines className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1.5)}>
                150%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2)}>
                200%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2.5)}>
                250%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className=''>
            <Button
              onClick={() => setRotation((prev) => prev + 90)}
              variant="ghost"
              aria-label="rotate 90 degrees"
            >
              <TbRotateClockwise className="h-4 w-4" />
            </Button>

            <PDFFullScreen fileUrl={url} />
          </div>
        </div>
      </div>
      <div className="flex-1 w-full max-h-screen">
        <SimpleBar autoHide={false} className="max-h-[calc(100vh-10rem)]">
          <div ref={ref}>
            <Document
              loading={
                <div className="flex justify-center">
                  <TbLoader3 className="my-24 h-6 w-6 animate-spin" />
                </div>
              }
              onLoadError={() => {
                toast({
                  title: 'Error loading PDF',
                  description: 'Please try again later',
                  variant: 'destructive',
                })
              }}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              file={url}
              className="max-h-full">
              {isLoading && renderedScale ? (
                <Page
                  width={width ? width : 1}
                  pageNumber={currPage}
                  scale={scale}
                  rotate={rotation}
                  key={'@' + renderedScale}
                />
              ) : null}

              <Page
                scale={scale}
                rotate={rotation}
                key={'@' + scale}
                width={width ? width : 1}
                pageNumber={currPage}
                className={cn(isLoading ? 'hidden' : '')}
                loading={
                  <div className="flex justify-center">
                    <TbLoader3 className="my-24 h-6 w-6 animate-spin" />
                  </div>
                }
                onRenderSuccess={() =>
                  setRenderedScale(scale)
                }
              />
            </Document>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default PDFRenderer
