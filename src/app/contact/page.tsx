'use client';

import React, { useState } from 'react';
import { DEALERSHIP } from '@/config/constants';
import { OUTLETS } from '@/data/outlets';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [branch, setBranch] = useState('mysore-road');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
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
            <Phone className="w-3.5 h-3.5" /> 7 Days a Week Support
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Contact Key Motorrs TATA
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about new car bookings, doorstep test drives, workshop appointments, or fleet corporate sales? Reach out to our Bangalore concierge team.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Hubs */}
            <div className="lg:col-span-6 space-y-8">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <Badge variant="outline" className="border-primary text-primary font-bold">
                    Headquarters
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground mt-2">
                    Key Motor Ventures Pvt. Ltd.
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Head Office & Flagship 3S Hub</span>
                      <p className="leading-relaxed">{DEALERSHIP.address.headOffice}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">General & Sales Enquiries</span>
                      <a href={`tel:${DEALERSHIP.contacts.primaryPhoneClean}`} className="text-primary font-bold hover:underline">
                        {DEALERSHIP.contacts.primaryPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-ev shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Service & Bodyshop Helpline</span>
                      <a href={`tel:${DEALERSHIP.contacts.servicePhoneClean}`} className="text-accent font-bold hover:underline">
                        {DEALERSHIP.contacts.servicePhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Email Support</span>
                      <a href={`mailto:${DEALERSHIP.contacts.email}`} className="text-primary hover:underline">
                        {DEALERSHIP.contacts.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Working Hours</span>
                      <p>{DEALERSHIP.contacts.workingHours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Key+Motors+Tata+Mysore+Road+Nayandahalli+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="outline" className="font-bold gap-2">
                      <ExternalLink className="w-4 h-4" /> Open Head Office in Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                    <h3 className="text-xl font-bold text-foreground">Message Dispatched!</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
                      Thank you, <strong className="text-foreground">{name}</strong>. Our customer relations desk will respond to your inquiry at <strong className="text-foreground">{phone}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>
                      <p className="text-xs text-muted-foreground">
                        Our executive will call or message back within 30 minutes.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Preferred Branch</Label>
                      <Select value={branch} onValueChange={setBranch}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {OUTLETS.map((o) => (
                            <SelectItem key={o.id} value={o.id}>
                              {o.name.replace('Key Motors - ', '')}
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

                    <div className="space-y-1.5">
                      <Label>Your Message / Query</Label>
                      <Textarea
                        rows={4}
                        placeholder="Tell us what you are looking for (car model, price quote, service requirement)..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-bold">
                      Submit Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
