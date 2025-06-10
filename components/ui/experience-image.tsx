'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ExperienceImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function ExperienceImage({ src, alt, className }: ExperienceImageProps) {
    return (
        <div
            className={cn('relative w-full h-full overflow-hidden', className)}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
        </div>
    );
}
