import { Metadata } from 'next'
import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  if (typeof window !== 'undefined') return path
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${
    process.env.PORT ?? 3000
  }${path}`
}

export function constructMetadata({
  title = "Soft-PDF || Makes Understanding PDF Easier.",
  description = "Soft-PDF is an open-source software to makes understanding PDFs files easier.",
  image = "/logo.png",
  icons = "/logo.png",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@TheAbdulQuayyum"
    },
    icons,
    metadataBase: new URL('http://localhost:3000/'),
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}  