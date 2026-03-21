"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'brigadeiros',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct WhatsApp message
    const message = `Hi! I'm interested in ordering:\n
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Order Type: ${formData.orderType}
Event Date: ${formData.eventDate}
Details: ${formData.message}`;

    const whatsappUrl = `https://wa.me/14076164661?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to sweeten your special occasion? Contact us to place your order
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(407) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Order Type</Label>
                      <RadioGroup
                        name="orderType"
                        value={formData.orderType}
                        onValueChange={(value) => setFormData({ ...formData, orderType: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="brigadeiros" id="brigadeiros" />
                          <Label htmlFor="brigadeiros">Brigadeiros</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="naked-cake" id="naked-cake" />
                          <Label htmlFor="naked-cake">Naked Cake</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both">Both</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your order (quantity, flavors, special requests...)"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link
                      href="https://wa.me/14076164661"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp: (407) 616-4661</span>
                    </Link>
                    <Link
                      href="tel:+14076164661"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call: (407) 616-4661</span>
                    </Link>
                    <Link
                      href="mailto:contact@adocurinha.com"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>contact@adocurinha.com</span>
                    </Link>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>Windermere, FL</span>
                    </div>
                    <Link
                      href="https://www.instagram.com/aadocurinha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>@aadocurinha</span>
                    </Link>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">By appointment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Order Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Brigadeiros:</strong> Minimum order of 12 units
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Naked Cakes:</strong> 48 hours advance notice required
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Delivery:</strong> Available for orders over $50 within 10 miles
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Payment:</strong> Cash, Zelle, Venmo accepted
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}