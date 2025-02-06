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

    // State for form inputs
    const [formData, setFormData] = useState({
        first: '',
        last: '',
        email: '',
        message: '',
    });

    // Handle input changes
    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://formspree.io/f/xwkdlanz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // Send JSON, not FormData
            });

            if (response.ok) {
                // Reset form state
                setFormData({ first: '', last: '', email: '', message: '' });

                // Show success toast
                toast({
                    title: 'Message sent!',
                    description:
                        "Thanks for reaching out. I'll get back to you soon.",
                    duration: 4000, // Show for 4 seconds
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            // Show error toast
            toast({
                title: 'Error',
                description: 'Failed to send message. Please try again.',
                variant: 'destructive',
                duration: 4000,
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section
            id="contact"
            className="relative scroll-mt-12 py-12 px-4 md:px-6 lg:px-8"
        >
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
                                <Input
                                    name="first"
                                    placeholder="First Name"
                                    required
                                    disabled={isLoading}
                                    value={formData.first}
                                    onChange={handleInputChange}
                                />
                                <Input
                                    name="last"
                                    placeholder="Last Name"
                                    required
                                    disabled={isLoading}
                                    value={formData.last}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                disabled={isLoading}
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            <Textarea
                                name="message"
                                placeholder="How can I help you?"
                                required
                                disabled={isLoading}
                                className="min-h-[150px]"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
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
