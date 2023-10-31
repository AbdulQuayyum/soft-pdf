import { authMiddleware } from '@kinde-oss/kinde-auth-nextjs/server'

export const config = {
  matcher: ['/Dashboard/:path*', '/AuthCallback'],
}

export default authMiddleware
