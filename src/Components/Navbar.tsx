import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TbArrowBigRightLines } from 'react-icons/tb'
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'

import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/">
            <Image
              width={20}
              height={20}
              src="/logo.png"
              alt="logo..."
              className="w-full h-full"
            />
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/Pricing"
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: 'sm',
                  className: 'custom-hover',
                })}
              >
                Get started{' '}
                <TbArrowBigRightLines className="ml-2 h-5 w-5 hover-icon" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
