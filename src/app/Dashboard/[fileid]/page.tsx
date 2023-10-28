import React from 'react'
import Link from 'next/link'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { notFound, redirect } from 'next/navigation'
import { TbArrowBigLeftLines } from 'react-icons/tb'

import { Database } from '@/Database'
import ChatWrapper from '@/Components/Chat/ChatWrapper'
import PDFRenderer from '@/Components/PDFRenderer'

interface PageProps {
  params: {
    fileid: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { fileid } = params

  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user || !user.id) redirect(`/AuthCallback?origin=Dashboard/${fileid}`)

  const file = await Database.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  })

  if (!file) notFound()

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-0.5rem)]">
      <div className="mx-auto w-full max-w-[1300px] grow lg:flex xl:px-2">
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <Link
              href="/Dashboard"
              className="flex items-center py-2 gap-x-2 mb-1"
            >
              <TbArrowBigLeftLines />
              <p className='text-sm font-extrabold'>Back to the Dashboard </p>
            </Link>
            <PDFRenderer url={file.url} />
          </div>
        </div>
        <div className="px-4 shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <ChatWrapper fileId={file.id} />
        </div>
      </div>
    </div>
  )
}

export default Page
