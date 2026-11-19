import type { Metadata } from "next";
import "./globals.css";
import { HeadAdScript } from "@/components/HeadAdScript";
import { HistatsScript } from "@/components/HistatsScript";

export const metadata: Metadata = {
  title: "Private Video Media Player",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <HeadAdScript />
        <HistatsScript />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
