import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Delivery",
  description: "Order your favourite food",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased overflow-hidden">{children}</body>
    </html>
  );
}
