import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import "@/styles/global.css"
import { inter } from "../src/assets/fonts/fonts"

export const metadata = {
  title: "Smart Tracker",
  description: "Your daily to-do companion",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans bg-secondaryBackground`}
    >
      <body className="min-h-screen flex flex-col text-foreground antialiased">
        <Header />

        <main
          className="flex-1 w-full relative mb-9"
          style={{
            background:
              "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(122, 20, 255, 0.15), transparent 80%)",
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
