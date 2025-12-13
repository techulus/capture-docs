import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Capture - Fast & Reliable Browser API",
    template: "%s | Capture",
  },
  description: "Effortlessly capture screenshots, create PDFs, scrape content, and extract metadata from any website with our state-of-the-art API.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
