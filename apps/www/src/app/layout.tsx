import type { Metadata } from 'next';
import '@bun-ui/react/dist/index.css';
import './globals.css';
import { SiteHader } from '@/components/site-header';
import { ThemeProvider } from '@bun-ui/react';

export const metadata: Metadata = {
  title: 'Bun-UI | Accessible and Customizable UI Components',
  description:
    'Build beautiful, accessible, and reusable components effortlessly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex flex-col">
            <SiteHader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
