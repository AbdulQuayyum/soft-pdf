'use client'

import Link from 'next/link'
import { TbArrowBigRightLines } from 'react-icons/tb'

import { Button } from './ui/button'

const UpgradeButton = () => {
  return (
    <Link href="/Dashboard/Billing">
      <Button className="w-full">
        Upgrade now <TbArrowBigRightLines className="h-5 w-5 ml-1.5" />
      </Button>
    </Link>
  )
}

export default UpgradeButton
