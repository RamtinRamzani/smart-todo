import Footer from "./_components/lib/Footer";
import { inter } from "./_components/ui/fonts";
import "./_styles/global.css";

export const metadata = {
  title: "Smart Tracker",
  description: "Your daily to-do companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans bg-secondaryBackground`}
    >
      <body className="min-h-screen flex flex-col text-foreground antialiased">
        {/* <header className="bg-background rounded-b-2xl shrink-0">
          <MobileHeader />
        </header> */}

        <main
          className="flex-1 w-full relative mb-9"
          style={{
            background:
              "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(122, 20, 255, 0.15), transparent 80%)",
          }}
        >
          {children}
        </main>

        <footer className="mt-auto rounded-t-2xl shrink-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
