import './globals.css'
import { cn, constructMetadata } from '@/Utilities/Utilities'
export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen font-[nunito] antialiased grainy">
        <p>Navbar</p>
        {children}
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
