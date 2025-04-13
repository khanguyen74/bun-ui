import type { Metadata } from 'next';
import '@bun-ui/react/dist/index.css';

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
  return <div className="flex flex-col px-4">{children}</div>;
}
