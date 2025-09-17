import { Inter } from "next/font/google";
import Link from "next/link";
import "./_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Tracker",
  description: "To-Do and Expense Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>
              <Link href="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
