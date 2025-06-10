import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
            <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
            <p className="text-lg text-muted-foreground">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="mt-4 rounded-md bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
            >
                Return Home
            </Link>
        </div>
    );
}
