'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export function ContactSection() {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch('https://formspree.io/f/xwkdlanz', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                toast({
                    title: 'Message sent!',
                    description:
                        "Thanks for reaching out. I'll get back to you soon.",
                });
                // Reset the form
                event.currentTarget.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to send message. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id="contact" className="py-12 px-4 md:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold">
                            Contact Me
                        </CardTitle>
                        <CardDescription>
                            Have a question or want to work together? Feel free
                            to reach out!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Input
                                        name="first"
                                        placeholder="First Name"
                                        required
                                        disabled={isLoading}
                                        aria-label="First Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        name="last"
                                        placeholder="Last Name"
                                        required
                                        disabled={isLoading}
                                        aria-label="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    disabled={isLoading}
                                    aria-label="Email Address"
                                />
                            </div>
                            <div className="space-y-2">
                                <Textarea
                                    name="message"
                                    placeholder="How can I help you?"
                                    required
                                    disabled={isLoading}
                                    className="min-h-[150px]"
                                    aria-label="Message"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}
