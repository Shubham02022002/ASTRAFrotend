import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.css";

const martian = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASTRA, a coding agent on your own machine",
  description:
    "ASTRA is a local-first coding agent for the terminal. It reads, edits and runs code with models running on your machine through Ollama.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={martian.variable} suppressHydrationWarning>
      <body>
        {/* Runs before paint so a saved light theme never flashes dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('astra-theme')==='light')document.documentElement.dataset.theme='light'}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
