import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript"],
  githubUrl = "",
  liveUrl = "",
}: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold mb-3">{title}</h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-4">
          {description}
        </p>

        <div className="pt-3 border-t border-border flex items-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={15} />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={15} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
