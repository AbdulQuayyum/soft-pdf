import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { PLANS } from '@/Configurations/Plans'
import { Database } from '@/Database'

export async function getUserSubscriptionPlan() {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user.id) {
    return {
      ...PLANS[0],
      isSubscribed: false,
      isCanceled: false,
      paymentCurrentPeriodEnd: null,
    }
  }

  const dbUser = await Database.user.findFirst({
    where: {
      id: user.id,
    },
  })

  if (!dbUser) {
    return {
      ...PLANS[0],
      isSubscribed: false,
      isCanceled: false,
      paymentCurrentPeriodEnd: null,
    }
  }

  const isSubscribed = Boolean(
    dbUser.paymentPriceId &&
      dbUser.paymentCurrentPeriodEnd && // 86400000 = 1 day
      dbUser.paymentCurrentPeriodEnd.getTime() + 86_400_000 > Date.now()
  )

  const plan = isSubscribed
    ? PLANS.find((plan) => plan.priceId === dbUser.paymentPriceId)
    : null

  let isCanceled = false;

  return {
    ...plan,
    paymentSubscriptionId: dbUser.paymentSubscriptionId,
    paymentCurrentPeriodEnd: dbUser.paymentCurrentPeriodEnd,
    stripeCustomerId: dbUser.paymentCustomerId,
    isSubscribed,
    isCanceled,
  }
}
