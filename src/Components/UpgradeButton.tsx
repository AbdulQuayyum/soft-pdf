'use client'

import { TbArrowBigRightLines } from 'react-icons/tb'

import { Button } from './ui/button'
import { trpc } from '@/app/_trpc/Client'

const UpgradeButton = () => {
  //   const {mutate: createStripeSession} = trpc.createStripeSession.useMutation({
  //     onSuccess: ({url}) => {
  //       window.location.href = url ?? "/dashboard/billing"
  //     }
  //   })

  return (
    <Button
      //  onClick={() => createStripeSession()}
      className="w-full"
    >
      Upgrade now <TbArrowBigRightLines className="h-5 w-5 ml-1.5" />
    </Button>
  )
}

export default UpgradeButton
