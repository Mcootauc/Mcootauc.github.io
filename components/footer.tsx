import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between md:py-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Mitchell Cootauco. All rights
                    reserved.
                </p>
                <div className="flex items-center gap-4">
                    <LinkedInIcon width={20} height={20} />
                    <GithubIcon width={20} height={20} />
                </div>
            </div>
        </footer>
    );
}
