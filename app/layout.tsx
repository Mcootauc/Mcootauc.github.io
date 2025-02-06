import { Inter, Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata = {
    title: 'Mitchell Cootauco - Software Engineer',
    description:
        'Full-stack software engineer specializing in web development and machine learning',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    inter.variable,
                    montserrat.variable
                )}
            >
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <Toaster />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
