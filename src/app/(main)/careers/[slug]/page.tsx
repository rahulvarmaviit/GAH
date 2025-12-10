
'use client';

import { useParams } from 'next/navigation';
import { jobs } from '@/lib/jobs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Palette, UploadCloud } from 'lucide-react';
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
        const role = formData.get('role');

        const subject = `Application for ${job?.title}: ${fullName}`;
        const body = `
            Role: ${role}
            Full Name: ${fullName}
            Email: ${email}
            Phone: ${phone || 'Not provided'}
        `;
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    if (!job) {
        return <div className="container py-20 text-center">Job not found.</div>;
    }

    return (
        <main className="flex-1 w-full max-w-screen-xl mx-auto py-10 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 pt-8">
                    <div className="flex flex-col gap-3 pb-6">
                        <h1 className="text-foreground text-4xl font-black leading-tight tracking-[-0.033em] pt-8">{job.title}</h1>
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
                <div className="lg:col-span-2 pt-8">
                    <div className="sticky top-28">
                         <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-card dark:bg-slate-900/50 rounded-lg shadow-sm border border-border">
                            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em]">Apply for this role</h2>
                             <div>
                                <Label htmlFor="role">Role</Label>
                                <Input id="role" name="role" type="text" value={job.title} readOnly className="bg-muted" />
                            </div>
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
                                <Label htmlFor="resume-upload">Upload Resume</Label>
                                <Label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/80 transition-colors">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                                        <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">PDF, DOCX, or TXT (MAX. 5MB)</p>
                                    </div>
                                    <Input id="resume-upload" name="resume" type="file" className="hidden" />
                                </Label>
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
