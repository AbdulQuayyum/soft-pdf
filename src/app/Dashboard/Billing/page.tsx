import React from 'react'

import { getUserSubscriptionPlan } from '@/Utilities/userPlan'
import BillingForm from '@/Components/BillingForm'

const Page = async () => {
  const subscriptionPlan = await getUserSubscriptionPlan()
  return <BillingForm subscriptionPlan={subscriptionPlan} />
}

export default Page
