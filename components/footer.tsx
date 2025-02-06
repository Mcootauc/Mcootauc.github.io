import Link from 'next/link';
import { Button } from './ui/button';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between md:py-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2025 Mitchell Cootauco. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <Link href="https://github.com/Mcootauc" target="_blank">
                        <Button variant="ghost" size="icon">
                            <GithubIcon className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mitchell-cootauco/"
                        target="_blank"
                    >
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
