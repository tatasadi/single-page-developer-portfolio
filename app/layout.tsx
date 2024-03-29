import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Reference from "@/components/Reference"
import classNames from "classnames"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Single Page Developer Portfolio",
  description: "A Frontend Mentor challenge solution.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={classNames(
          spaceGrotesk.className,
          "relative flex min-h-screen flex-col items-center justify-center bg-black text-white",
        )}
      >
        {children}
        <Reference />
      </body>
    </html>
  )
}
