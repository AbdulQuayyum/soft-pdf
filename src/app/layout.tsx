import { constructMetadata } from '@/Utilities/Utilities'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import BackToTop from '@/Components/BackToTop'
import Providers from '@/Components/Providers'

import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'simplebar-react/dist/simplebar.min.css'

import { Toaster } from '@/Components/ui/toaster'

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body className="flex flex-col  min-h-screen font-[nunito] antialiased grainy">
          <Toaster />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer>
            <Footer />
            <BackToTop />
          </footer>
        </body>
      </Providers>
    </html>
  )
}
