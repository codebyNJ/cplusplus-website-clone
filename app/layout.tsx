import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Mona_Sans as FontSans, JetBrains_Mono as FontMono, Fira_Code as FontCode } from "next/font/google";
import { FloatingMinecraftBlocks } from "@/components/floating-minecraft-blocks";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>C++</title>
        <meta name="description" content="A modern C++ reference and learning platform" />
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} ${fontCode.variable} font-sans bg-background text-foreground dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <FloatingMinecraftBlocks />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

