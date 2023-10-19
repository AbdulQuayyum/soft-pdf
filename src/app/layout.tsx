import './globals.css'
import { cn, constructMetadata } from '@/Utilities/Utilities'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import BackToTop from '@/Components/BackToTop'

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen font-[nunito] antialiased grainy">
        <Navbar />
        {children}
        <footer>
          <Footer />
          <BackToTop />
        </footer>
      </body>
    </html>
  )
}
