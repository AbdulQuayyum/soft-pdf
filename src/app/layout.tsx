import './globals.css'
import { constructMetadata } from '@/Utilities/Utilities'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import BackToTop from '@/Components/BackToTop'
import Providers from '@/Components/Providers'

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body className="min-h-screen font-[nunito] antialiased grainy">
          <Navbar />
          {children}
          <footer>
            <Footer />
            <BackToTop />
          </footer>
        </body>
      </Providers>
    </html>
  )
}
