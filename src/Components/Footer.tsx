import React from 'react'
import Link from 'next/link'

import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <MaxWidthWrapper>
      <div className="footer-container border-zinc-300 border-t-2">
        <div>
          <span className=" dark:text-[#fff]">
            {currentYear} &#169;
            <Link
              href="https://abdulquayyum.live/"
              className=" hover:text-black"
              target="_blank"
            >
              Abdul-Quayyum Alao
            </Link>
            , All rights reserved
          </span>
        </div>
        <div className="flex gap-6">
          <Link
            href="/"
            className=" hover:text-black"
            target="_blank"
          >
            <span className="cursor-pointer dark:text-[#fff]">
              Terms & Conditions
            </span>
          </Link>
          <Link
            href="/"
            className=" hover:text-black"
            target="_blank"
          >
            <span className="cursor-pointer dark:text-[#fff]">
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Footer
