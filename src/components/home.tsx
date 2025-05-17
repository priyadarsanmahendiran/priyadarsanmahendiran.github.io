import React, { useState, useEffect } from "react";
import { m, motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import ExperienceTimeline from "./ExperienceTimeline";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = ["hero", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }

    // Reset scrolling state after animation completes
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Job Log",
      description:
        "JobLog is a work journaling app that helps developers log daily tasks and auto-generate stand-up reports. Built with Kotlin for mobile and Spring Boot for backend, it features secure JWT auth, scheduled summaries, and real-time reporting to streamline developer productivity.",
      image:
        "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Kotlin", "Java", "Spring Boot", "PostgreSQL"],
      githubUrl: "https://github.com/priyadarsanmahendiran/JobLog"
    },
    {
      id: 2,
      title: "BLOK - Clasroom booking system",
      description:
        "An interactive classroom booking system built to streamline room reservations across campus. Enabled students and faculty to view availability, book slots, and manage schedules through a user-friendly interface. Focused on reducing scheduling conflicts and improving space utilization.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["Bootstrap", "PHP", "MySQL"],
      githubUrl: "https://github.com/priyadarsanmahendiran/BLOK"
    },
    {
      id: 3,
      title: "Soukya - vRehab",
      description:
        "Soukya is a computer vision-based exercise monitoring system that uses a device’s camera and OpenCV (Python) to track movements and provide real-time feedback. Integrated with a web app to manage patient records, doctor details, and track progress for personalized rehab and fitness workflows.",
      image:
        "https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Firebase", "OpenCV", "React.js"],
      githubUrl: "https://github.com/heyimpreetham/Soukya-vRehab"
    },
  ];

  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Software Engineer III",
      organization: "Walmart Global Tech India",
      period: "Sep 2024 - Present",
      description:
        "Design and develop robust, scalable features for enterprise-grade WMS solutions. Contribute across the development lifecycle — from technical design and implementation to code reviews and optimizations. Actively participate in architecture discussions, ensuring performance, reliability, and clean code principles are upheld.",
    },
    {
      id: 2,
      type: "work",
      title: "Software Engineer II",
      organization: "Walmart Global Tech India",
      period: "Jun 2022 - Aug 2024",
      description:
        "Developed key features for next-gen WMS, working across Kotlin-based Android apps and backend services. Built scalable APIs and mobile workflows, ensuring smooth integration between client and server components.",
    },
    {
      id: 3,
      type: "education",
      title: "BE in Computer Science and Engineering",
      organization: "PSG College of Technology",
      period: "2018 - 2022",
      description:
        "Graduated with first class distinction.",
    }
  ];

  // Skills data organized by category
  const skills = {
    frontend: [
      "Flutter",
      "Kotlin"
    ],
    backend: [
      "Java",
      "Spring Boot",
      "Python"
    ],
    databases: ["PostgreSQL", "MongoDB", "AzureSQL", "Cosmos", "Firebase"],
    devOps: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions"
    ],
    messaging: ["Apache Kafka", "IBMMQ"],
    tools: ["Git", "Jira", "VS Code", "Postman", "IntelliJ", "Android Studio"],
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Priyadarsan Mahendiran</div>
          <ul className="hidden md:flex space-x-6">
            {["hero", "projects", "skills", "experience", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize ${activeSection === section ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {section === "hero" ? "Home" : section}
                  </button>
                </li>
              ),
            )}
          </ul>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Priyadarsan Mahendiran</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
                Software Engineer
              </h2>
              <p className="text-lg mb-8 max-w-lg">
                I design and develop scalable, secure, and user-friendly software solutions using modern technologies, with a strong focus on clean architecture and performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection("contact")}>
                  Contact Me
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="../assets/files/Priyadarsan's Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <FileText className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
              <div className="flex mt-8 space-x-4">
                <a
                  href="https://github.com/priyadarsanmahendiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/priyadarsan-mahendiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:darsanprapanjan@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="../assets/images/Priyadarsan.jpg"
                  alt="Priyadarsan Mahendiran"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="animate-bounce text-muted-foreground hover:text-foreground"
              aria-label="Scroll to projects"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </motion.div>
          <ExperienceTimeline
            workExperience={experiences
              .filter((exp) => exp.type === "work")
              .map((exp) => ({
                date: exp.period,
                title: exp.title,
                company: exp.organization,
                description: exp.description,
                skills: [],
              }))}
            education={experiences
              .filter((exp) => exp.type === "education")
              .map((exp) => ({
                date: exp.period,
                title: exp.title,
                company: exp.organization,
                description: exp.description,
                skills: [],
              }))}
          />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="mb-6 text-muted-foreground">
                I'm currently open to new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="mailto:darsanprapanjan@gmail.com"
                    className="hover:text-primary"
                  >
                    darsanprapanjan@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="https://linkedin.com/in/priyadarsan-mahendiran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="https://github.com/priyadarsanmahendiran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/priyadarsanmahendiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/priyadarsan-mahendiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:darsanprapanjan@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Priyadarsan Mahendiran. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
