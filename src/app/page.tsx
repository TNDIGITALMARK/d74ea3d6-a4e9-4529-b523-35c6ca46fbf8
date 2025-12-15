import Link from "next/link";
import { Navigation } from "@/components/contractor/navigation";
import { Footer } from "@/components/contractor/footer";
import { ServiceCard } from "@/components/contractor/service-card";
import { TestimonialCard } from "@/components/contractor/testimonial-card";
import {
  ChefHat,
  Bath,
  Home,
  Building2,
  Hammer,
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  Clock,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white">
        <div className="absolute inset-0 bg-[url('/construction-pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <p className="text-sm font-semibold text-primary-foreground">
                Building Dreams Since 2010
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Sacramento's Premier General Contractor
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Transform your space with expert craftsmanship and attention to detail.
              From kitchen remodels to commercial buildouts, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-accent transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-heading font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <p className="font-heading font-bold text-3xl text-foreground mb-1">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <p className="font-heading font-bold text-3xl text-foreground mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="font-heading font-bold text-3xl text-foreground mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <p className="font-heading font-bold text-3xl text-foreground mb-1">On-Time</p>
              <p className="text-sm text-muted-foreground">Project Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert craftsmanship for residential and commercial projects throughout Sacramento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={ChefHat}
              title="Kitchen Remodeling"
              description="Transform your kitchen into a modern culinary space with custom cabinetry, countertops, and professional installation."
              priceRange="$25,000+"
            />
            <ServiceCard
              icon={Bath}
              title="Bathroom Renovations"
              description="Create your dream bathroom with luxury fixtures, tile work, and expert plumbing solutions."
              priceRange="$15,000+"
            />
            <ServiceCard
              icon={Home}
              title="Home Additions"
              description="Expand your living space with expertly designed and constructed room additions and extensions."
              priceRange="$80,000+"
            />
            <ServiceCard
              icon={Building2}
              title="Commercial Buildouts"
              description="Professional commercial construction services for offices, retail spaces, and restaurants."
              priceRange="$100,000+"
            />
            <ServiceCard
              icon={Hammer}
              title="Foundation Repairs"
              description="Expert foundation inspection, repair, and reinforcement to protect your property investment."
              priceRange="$8,000+"
            />
            <ServiceCard
              icon={Home}
              title="Full Home Remodels"
              description="Complete home transformation services from concept to completion with meticulous attention to detail."
              priceRange="$150,000+"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get a free consultation and detailed quote for your construction or renovation project.
            Our team is ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-primary px-10 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white/90 transition-all shadow-xl hover:scale-105"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied homeowners and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Jennifer Martinez"
              role="Homeowner"
              rating={5}
              projectType="Kitchen Remodel - Midtown Sacramento"
              quote="Sacramento Premier Contractors transformed our dated kitchen into a modern masterpiece. The attention to detail and professionalism throughout the project was outstanding. They completed everything on time and within budget!"
            />
            <TestimonialCard
              name="David Chen"
              role="Property Developer"
              rating={5}
              projectType="Commercial Buildout"
              quote="We've worked with many contractors over the years, but Sacramento Premier stands out for their reliability and quality workmanship. They delivered our commercial space exactly as planned. Highly recommended for any serious construction project."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
