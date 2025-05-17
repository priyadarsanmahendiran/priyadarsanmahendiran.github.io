import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
  isLast?: boolean;
}

const TimelineItem = ({
  date,
  title,
  company,
  description,
  skills = [],
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative flex gap-6 pb-8 bg-background">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-[19px] top-[40px] h-full w-[2px] bg-border" />
      )}

      {/* Timeline dot */}
      <div className="relative z-10 mt-2 h-10 w-10 rounded-full border-4 border-background bg-primary flex items-center justify-center text-primary-foreground font-bold">
      </div>

      {/* Content */}
      <Card className="flex-1 mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            <p className="text-sm text-muted-foreground mt-1 md:mt-0">{date}</p>
          </div>

          <p className="my-4">{description}</p>

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

interface ExperienceTimelineProps {
  workExperience?: TimelineItemProps[];
  education?: TimelineItemProps[];
}

const ExperienceTimeline = ({
  workExperience = [],
  education = [],
}: ExperienceTimelineProps) => {
  return (
    <div className="w-full bg-background p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
        {workExperience.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLast={index === workExperience.length - 1}
          />
        ))}

        <Separator className="my-12" />

        <h3 className="text-2xl font-semibold mb-6">Education</h3>
        {education.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
