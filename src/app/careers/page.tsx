'use client';

import React, { useState } from 'react';
import { CAREER_OPENINGS } from '@/data/careers';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Users,
  Award,
  UploadCloud,
  ChevronDown,
} from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState('sales-consultant');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('2-5 Years');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <Users className="w-3.5 h-3.5" /> Join Bangalore&apos;s #1 Tata Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Careers at Key Motorrs TATA
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Build an exciting, high-growth career in the automobile and electric vehicle revolution with competitive remuneration, performance incentives, and OEM certified training.
          </p>
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary font-bold">
              Active Vacancies
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Current Opportunities Across Bangalore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_OPENINGS.map((job) => (
              <Card key={job.id} className="border-border bg-card p-6 flex flex-col justify-between hover:shadow-xl transition-all">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Badge variant="secondary" className="text-[10px] mb-1 font-semibold">
                        {job.department}
                      </Badge>
                      <h3 className="font-bold text-lg text-foreground">{job.title}</h3>
                    </div>
                    <Badge variant="outline" className="text-xs text-accent font-bold">
                      {job.vacancies} Openings
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" /> {job.experience}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-border">
                    <span className="text-[11px] font-bold uppercase text-foreground">Key Responsibilities:</span>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-1">
                      {job.responsibilities.slice(0, 3).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-border mt-4">
                  <Button
                    onClick={() => {
                      setSelectedJob(job.id);
                      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full font-bold text-xs"
                  >
                    Apply for this Position
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section id="apply-form" className="py-16 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Application Submitted!</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-foreground">{name}</strong>. Your profile for{' '}
                  <strong className="text-foreground">{CAREER_OPENINGS.find((j) => j.id === selectedJob)?.title}</strong> has been received by our Human Resources department. Our recruitment team will contact you at <strong className="text-foreground">{phone}</strong> for interview scheduling.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1 pb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Submit Your Resume / Profile
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Direct application to Key Motors HR Talent Acquisition team.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label>Position Applying For</Label>
                  <Select value={selectedJob} onValueChange={setSelectedJob}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CAREER_OPENINGS.map((j) => (
                        <SelectItem key={j.id} value={j.id}>
                          {j.title} ({j.department})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Your Full Name</Label>
                    <Input
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Mobile Number</Label>
                    <Input
                      required
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Email Address</Label>
                    <Input
                      required
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Relevant Experience</Label>
                    <Select value={experience} onValueChange={setExperience}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Fresher / < 1 Year">Fresher / Graduate</SelectItem>
                        <SelectItem value="1 - 3 Years">1 - 3 Years</SelectItem>
                        <SelectItem value="3 - 6 Years">3 - 6 Years</SelectItem>
                        <SelectItem value="6+ Years">6+ Years Senior</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  Submit Job Application
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
