import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
  isLast?: boolean;
  type?: "work" | "education";
}

const TimelineItem = ({
  date,
  title,
  company,
  description,
  skills = [],
  isLast = false,
  type = "work",
}: TimelineItemProps) => {
  const dotColor = type === "work" ? "bg-primary" : "bg-accent";
  const lineColor = type === "work" ? "bg-primary/20" : "bg-accent/20";
  const borderColor = type === "work" ? "border-l-primary/50" : "border-l-accent/50";

  return (
    <div className="relative flex gap-4 pb-8">
      {!isLast && (
        <div className={`absolute left-[13px] top-[28px] bottom-0 w-px ${lineColor}`} />
      )}
      <div className={`relative z-10 mt-1 w-7 h-7 rounded-full ${dotColor} flex-shrink-0 ring-4 ring-background shadow-sm`} />
      <div className={`flex-1 bg-card border border-border border-l-2 ${borderColor} rounded-xl p-4 hover:shadow-md transition-shadow duration-200`}>
        <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
          <h3 className="font-semibold text-sm leading-snug">{title}</h3>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full whitespace-nowrap">
            {date}
          </span>
        </div>
        <p className="text-sm text-primary font-medium mb-2">{company}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {skills.map((skill, i) => (
              <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
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
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
      <div>
        <h3 className="text-base font-semibold mb-6 flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-primary" />
          Work Experience
        </h3>
        {workExperience.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLast={index === workExperience.length - 1}
            type="work"
          />
        ))}
      </div>
      <div>
        <h3 className="text-base font-semibold mb-6 flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-accent" />
          Education
        </h3>
        {education.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLast={index === education.length - 1}
            type="education"
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
