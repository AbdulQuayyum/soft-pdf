import Image from 'next/image'
import Link from 'next/link'
import { TbArrowBigRightLines } from 'react-icons/tb'

import { buttonVariants } from '@/Components/ui/button'
import MaxWidthWrapper from '@/Components/MaxWidthWrapper'
import About from '@/Components/About'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Understand your <span className="text-zinc-300">Documents</span> in
          seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Soft-PDF allows you to have conversations with any PDF document.
          Simply upload your file and start asking questions right away.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'custom-hover mt-5',
          })}
          href="/Dashboard"
          target="_blank"
        >
          Get started{' '}
          <TbArrowBigRightLines className="ml-2 h-5 w-5 hover-icon" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <About />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-10 max-w-5xl sm:mt-10">
        <div className="sm:mb-12 mb-0 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <span className="mb-5 text-4xl lg:text-5xl py-6 flex items-center justify-center font-extrabold text-[#000]">
              How to use Soft-PDF?
            </span>
            <p className="mt-4 text-lg text-center text-gray-600">
              Chatting to your PDF files has never been easier than with
              Soft-PDF.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 px-4 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-[18px] font-[600] text-black">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{' '}
                <Link
                  href="/Pricing"
                  className="text-zinc-700 font-[700] underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-[18px] font-[600] text-black">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-[18px] font-[600] text-black">Step 3</span>
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-2 text-zinc-700">
                It&apos;s that simple. Try out Soft-PDF today - it really takes
                less than a minute.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  )
}
