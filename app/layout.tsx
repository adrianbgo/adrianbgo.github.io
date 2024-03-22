import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adrian Bauer Portfolio',
  description: 'The Web Design and Development Portfolio for Adrian Bauer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
