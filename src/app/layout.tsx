import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Move to Switzerland — Premium Relocation Advisory',
  description: 'A specialist relocation and wealth advisory service for high-net-worth individuals and families relocating to Switzerland.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
