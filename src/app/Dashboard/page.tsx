import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import { Database } from '@/Database'
import Dashboard from '@/Components/Dashboard'

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user || !user.id) redirect('/AuthCallback?Origin=Dashboard')

  const dbUser = await Database.user.findFirst({
    where: {
      id: user.id,
    },
  })

  if (!dbUser) redirect('/AuthCallback?Origin=Dashboard')

  return <Dashboard />
}

export default Page
