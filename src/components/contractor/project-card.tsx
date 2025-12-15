"use client";

import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  location: string;
  completionDate: string;
  imageBefore: string;
  imageAfter: string;
  category: string;
}

export function ProjectCard({
  title,
  location,
  completionDate,
  imageBefore,
  imageAfter,
  category,
}: ProjectCardProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      {/* Image Container */}
      <div
        className="relative h-64 overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src={imageBefore}
            alt={`${title} - Before`}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Before
          </div>
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={imageAfter}
            alt={`${title} - After`}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            After
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        <h3 className="font-heading font-bold text-lg mb-3 text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Completed {completionDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
