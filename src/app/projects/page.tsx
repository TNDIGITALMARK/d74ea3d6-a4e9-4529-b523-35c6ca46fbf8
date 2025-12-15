import { Navigation } from "@/components/contractor/navigation";
import { Footer } from "@/components/contractor/footer";
import { ProjectCard } from "@/components/contractor/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Kitchen Remodel",
      location: "Midtown Sacramento",
      completionDate: "October 2024",
      imageBefore: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      category: "Kitchen Remodeling",
    },
    {
      title: "Luxury Bathroom Renovation",
      location: "East Sacramento",
      completionDate: "September 2024",
      imageBefore: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      category: "Bathroom Renovations",
    },
    {
      title: "Two-Story Home Addition",
      location: "Roseville",
      completionDate: "August 2024",
      imageBefore: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      category: "Home Additions",
    },
    {
      title: "Restaurant Buildout",
      location: "Downtown Sacramento",
      completionDate: "July 2024",
      imageBefore: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
      category: "Commercial Buildouts",
    },
    {
      title: "Foundation Repair & Reinforcement",
      location: "Land Park",
      completionDate: "June 2024",
      imageBefore: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      category: "Foundation Repairs",
    },
    {
      title: "Complete Home Renovation",
      location: "Folsom",
      completionDate: "May 2024",
      imageBefore: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      category: "Full Home Remodels",
    },
    {
      title: "Master Suite Addition",
      location: "Elk Grove",
      completionDate: "April 2024",
      imageBefore: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      category: "Home Additions",
    },
    {
      title: "Office Space Renovation",
      location: "Natomas",
      completionDate: "March 2024",
      imageBefore: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      category: "Commercial Buildouts",
    },
    {
      title: "Custom Kitchen & Dining Space",
      location: "Fair Oaks",
      completionDate: "February 2024",
      imageBefore: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80",
      imageAfter: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      category: "Kitchen Remodeling",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Browse our portfolio of completed projects showcasing quality craftsmanship
              and attention to detail. Each project represents our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section - Can be expanded later */}
      <section className="bg-white border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{projects.length}</span> projects completed
            </p>
            <p className="text-sm text-muted-foreground">
              Hover over images to see before & after
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
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
            Let's discuss your vision and create a detailed plan for your construction or renovation project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-primary px-10 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white/90 transition-all shadow-xl hover:scale-105"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
