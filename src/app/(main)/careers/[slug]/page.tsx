
'use client';

import { useParams } from 'next/navigation';
import { jobs } from '@/lib/jobs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Palette, Upload } from 'lucide-react';
import Link from 'next/link';

export default function JobDetailPage() {
    const params = useParams();
    const job = jobs.find((j) => j.slug === params.slug);
    const recipientEmail = 'venubull07ff@gmail.com';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const coverLetter = formData.get('coverLetter');

        const subject = `Application for ${job?.title}: ${fullName}`;
        const body = `
            Full Name: ${fullName}
            Email: ${email}
            Phone: ${phone || 'Not provided'}

            Cover Letter:
            ${coverLetter}
        `;
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    if (!job) {
        return <div className="container py-20 text-center">Job not found.</div>;
    }

    return (
        <main className="flex-1 w-full max-w-screen-xl mx-auto py-10 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    <div className="flex flex-col gap-3 pb-6">
                        <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em]">{job.title}</h1>
                        <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="gap-2">
                                <MapPin className="h-4 w-4" /> {job.location}
                            </Badge>
                            <Badge variant="outline" className="gap-2">
                                <Briefcase className="h-4 w-4" /> {job.type}
                            </Badge>
                            <Badge variant="secondary" className="gap-2">
                                <Palette className="h-4 w-4" /> {job.department}
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 text-muted-foreground">
                        <p className="text-base font-normal leading-relaxed">{job.description}</p>
                        <div>
                            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Responsibilities</h2>
                            <ul className="list-disc list-outside pl-5 space-y-2">
                                {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Requirements</h2>
                            <ul className="list-disc list-outside pl-5 space-y-2">
                                {job.requirements.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Benefits</h2>
                            <ul className="list-disc list-outside pl-5 space-y-2">
                                {job.benefits.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                         <Button asChild variant="outline">
                            <Link href="/careers">Back to Careers</Link>
                        </Button>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="sticky top-28">
                         <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-card dark:bg-slate-900/50 rounded-lg shadow-sm border border-border">
                            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em]">Apply for this role</h2>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input id="fullName" name="fullName" placeholder="Jane Doe" required type="text" />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" placeholder="jane.doe@example.com" required type="email" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone Number <span className="text-muted-foreground">(Optional)</span></Label>
                                <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" type="tel" />
                            </div>
                            <div>
                                <Label htmlFor="coverLetter">Cover Letter</Label>
                                <Textarea id="coverLetter" name="coverLetter" placeholder="Tell us why you're a great fit for this role..." rows={4} />
                            </div>
                            <div>
                                <Label htmlFor="resume">Upload Resume</Label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border px-6 py-10">
                                    <div className="text-center">
                                        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                                        <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                                            <Label htmlFor="file-upload" className="relative cursor-pointer rounded-lg font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:text-primary/80">
                                                <span>Upload a file</span>
                                                <Input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </Label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-muted-foreground/80">PDF, DOCX up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" className="w-full">
                                    Submit Application
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
