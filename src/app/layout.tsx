import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AppProvider } from '../context/AppContext';
import AccessibilityToolbar from '../components/AccessibilityToolbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'NeuroBridge — Making Workplaces Work for Every Mind',
  description:
    'A digital workplace platform that helps neurodivergent employees understand and communicate their working preferences, while giving managers and HR practical tools for inclusive workplaces.',
  keywords: [
    'neurodiversity',
    'workplace inclusion',
    'work style profile',
    'inclusive hiring',
    'manager tools',
    'neurodivergent support'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900 bg-[#FBFBFA]">
        <AppProvider>
          <AccessibilityToolbar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
