import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import AppQueryProvider from "./providers";

export const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: {
    default: "My Next.js App",
    template: "%s | My Next.js App",
  },
  description:
    "เว็บแอปพลิเคชันที่สร้างด้วย Next.js 16 พร้อมฟีเจอร์ Cache Component",
  keywords: ["Next.js", "React", "Web Development", "TypeScript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://yourdomain.com",
    siteName: "My Next.js App",
    title: "My Next.js App",
    description: "เว็บแอปพลิเคชันที่สร้างด้วย Next.js 16",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Next.js App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Next.js App",
    description: "เว็บแอปพลิเคชันที่สร้างด้วย Next.js 16",
    images: ["/x-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={prompt.variable}>
      <body className={prompt.className}>
        <AppQueryProvider>
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
            <div className="container mx-auto flex h-16 items-center px-4">
              <Link href="/" className="flex items-center space-x-2 mr-8">
                <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  NextApp
                </span>
              </Link>

              <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
                <Link
                  href="/"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  หน้าหลัก
                </Link>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  เกี่ยวกับเรา
                </Link>
                <Link
                  href="/products"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  สินค้า
                </Link>
                <Link
                  href="/orders"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  รายงานคำสั่งซื้อ
                </Link>
                <Link
                  href="/cache-demo"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Cache Demo
                </Link>
                <Link
                  href="/users"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  ข้อมูลผู้ใช้งาน
                </Link>
              </nav>
            </div>
          </header>

          {children}
        </AppQueryProvider>
      </body>
    </html>
  );
}
