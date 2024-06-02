import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";
import { QueryProvider } from "@/components/query-provider";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <Header />
            <main className="mx-auto max-w-2xl w-full flex py-16 lg:py-24 md:px-0 px-8 min-h-[100vh]">
              {children}
            </main>
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
