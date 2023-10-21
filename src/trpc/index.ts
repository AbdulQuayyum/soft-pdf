import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { TRPCError } from '@trpc/server'

import { privateProcedure, publicProcedure, router } from './trpc'
import { Database } from '@/Database'

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user = getUser()

    if (!user.id || !user.email) throw new TRPCError({ code: 'UNAUTHORIZED' })

    // check if the user is in the database
    const dbUser = await Database.user.findFirst({
      where: {
        id: user.id,
      },
    })

    if (!dbUser) {
      // create user in db
      await Database.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      })
    }

    return { success: true }
  }),
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx

    return await Database.file.findMany({
      where: {
        userId,
      },
    })
  }),
})

export type AppRouter = typeof appRouter
