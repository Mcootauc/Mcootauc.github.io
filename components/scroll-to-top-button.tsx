'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when page is scrolled more than 100px
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground p-3 rounded-full shadow-lg transition-all duration-300 ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
            }`}
        >
            <ChevronUp size={20} />
        </button>
    );
}
