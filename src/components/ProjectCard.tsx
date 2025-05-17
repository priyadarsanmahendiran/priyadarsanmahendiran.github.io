import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project and what technologies were used to build it.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  githubUrl = "https://github.com",
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-[400px] overflow-hidden bg-card h-[400px] flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-1">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pb-2 flex-grow">
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-0 flex justify-between">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={16} />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
