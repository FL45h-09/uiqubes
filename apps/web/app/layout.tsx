import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'
import "@/_assets/css/globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', "700"],
  style: ['normal'],
  display: 'swap',
  variable: '--font-poppins',
});
const brockmann = localFont({ 
    src : "./_assets/fonts/brockmann/brockmann-medium.woff2",
    weight: '500',
    style: 'normal',
    display: 'swap',
    variable: '--font-brockmann',
  });

export const metadata: Metadata = {
  title: "UIQubes - Reusable React & Next.js UI Components",
  description: "Free, open-source library of modern plug-and-play UI components. Contribute or use. No bloat. Just clean code.",
  openGraph: {
    title: "UIQubes - Reusable React & Next.js UI Components",
    description: "Free, open-source library of modern plug-and-play UI components. Contribute or use. No bloat. Just clean code.",
    url: "https://uiqubes.vercel.app",
    type: "website",
    images: [
      {
        url: "https://uiqubes.vercel.app/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "UIQubes preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UIQubes - React & Next.js UI Component Library",
    description: "Copy-paste UI blocks. Build fast. Contribute faster. Built for devs, by devs.",
    images: ["https://uiqubes.vercel.app/social-preview.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} ${brockmann.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
    );
}
