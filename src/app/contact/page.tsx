"use client";

import { Navigation } from "@/components/contractor/navigation";
import { Footer } from "@/components/contractor/footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        timeline: "",
        budget: "",
        message: "",
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Ready to start your construction or renovation project? Fill out the form below
              and we'll get back to you within 24 hours with a detailed consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Get in touch with our team. We're here to answer your questions and help bring your project to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:916-555-0123"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (916) 555-0123
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri 7am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@sacpremier.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      info@sacpremier.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Sacramento, CA
                      <br />
                      Serving Sacramento & surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 6:00 PM
                      <br />
                      Saturday: 8:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                  Licensed & Insured
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fully licensed, bonded, and insured general contractor serving Sacramento County and surrounding areas since 2010.
                </p>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow-xl border border-border p-8">
                <h2 className="font-heading font-bold text-3xl mb-6 text-card-foreground">
                  Request a Free Quote
                </h2>

                {submitSuccess ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We've received your quote request. Our team will contact you within 24 hours to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                        placeholder="(916) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-foreground mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                      >
                        <option value="">Select a project type</option>
                        <option value="kitchen">Kitchen Remodeling</option>
                        <option value="bathroom">Bathroom Renovations</option>
                        <option value="addition">Home Additions</option>
                        <option value="commercial">Commercial Buildouts</option>
                        <option value="foundation">Foundation Repairs</option>
                        <option value="full-remodel">Full Home Remodels</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-foreground mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (1-2 weeks)</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="6-months">Within 6 months</option>
                          <option value="planning">Just planning</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-foreground mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="10-25k">$10,000 - $25,000</option>
                          <option value="25-50k">$25,000 - $50,000</option>
                          <option value="50-100k">$50,000 - $100,000</option>
                          <option value="100-250k">$100,000 - $250,000</option>
                          <option value="250k+">$250,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring transition-colors resize-none"
                        placeholder="Please describe your project, including any specific requirements or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-accent transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by Sacramento Premier Contractors regarding your project.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
