import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sun,
  Moon,
  Menu,
  X,
  Smartphone,
  Server,
  Database,
  Cloud,
  MessageSquare,
  Wrench,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import ExperienceTimeline from "./ExperienceTimeline";
import { Button } from "./ui/button";

const skillIconMap: Record<string, React.ElementType> = {
  frontend: Smartphone,
  backend: Server,
  databases: Database,
  devOps: Cloud,
  messaging: MessageSquare,
  tools: Wrench,
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      const sections = ["hero", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // ── DATA (keep exactly as-is from current file) ──────────────────────────
  const projects = [
    {
      id: 0,
      title: "Workspace Flow",
      description:
        "Workspace Flow is a AI-powered browser extension that groups your tabs based on the context of the website. It uses AI to understand the context of the website and groups your tabs accordingly.",
      image:
        "https://images.unsplash.com/photo-1762330467186-1af11aa6bd31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Javascript", "Browser Extension", "Gemini"],
      githubUrl: "https://github.com/priyadarsanmahendiran/WorkspaceFlow",
      liveUrl: "https://chromewebstore.google.com/detail/workspaceflow-smart-tab-m/kmlkaemdlaglfimadmpglcmoaknpghpe",
    },
    {
      id: 1,
      title: "Sub Slayer",
      description:
        "Sub Slayer is a subscription management app that helps users track their subscriptions and save money. Built with Flutter and SQLite, it works seamlessly without needing any authentication.",
      image:
        "https://plus.unsplash.com/premium_photo-1682309524785-cf2288f7b544?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Flutter", "SQLite"],
      githubUrl: "https://github.com/priyadarsanmahendiran/SubSlayer",
    },
    {
      id: 2,
      title: "Desktop Organiser",
      description:
        "Desktop Organiser is a AI-powered desktop application that helps users organise their files and folders. Built using python and Ollama for local LLM inference.",
      image:
        "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Ollama"],
      githubUrl: "https://github.com/priyadarsanmahendiran/Desktop-Organiser",
    },
    {
      id: 3,
      title: "Job Log",
      description:
        "JobLog is a work journaling app that helps developers log daily tasks and auto-generate stand-up reports. Built with Kotlin for mobile and Spring Boot for backend, it features secure JWT auth, scheduled summaries, and real-time reporting to streamline developer productivity.",
      image:
        "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Kotlin", "Java", "Spring Boot", "PostgreSQL"],
      githubUrl: "https://github.com/priyadarsanmahendiran/JobLog",
    },
    {
      id: 4,
      title: "BLOK - Clasroom booking system",
      description:
        "An interactive classroom booking system built to streamline room reservations across campus. Enabled students and faculty to view availability, book slots, and manage schedules through a user-friendly interface. Focused on reducing scheduling conflicts and improving space utilization.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["Bootstrap", "PHP", "MySQL"],
      githubUrl: "https://github.com/priyadarsanmahendiran/BLOK",
    },
    {
      id: 5,
      title: "Soukya - vRehab",
      description:
        "Soukya is a computer vision-based exercise monitoring system that uses a device's camera and OpenCV (Python) to track movements and provide real-time feedback. Integrated with a web app to manage patient records, doctor details, and track progress for personalized rehab and fitness workflows.",
      image:
        "https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Firebase", "OpenCV", "React.js"],
      githubUrl: "https://github.com/heyimpreetham/Soukya-vRehab",
    },
  ];

  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Software Engineer III",
      organization: "Walmart Global Tech India",
      period: "Sep 2024 - Jun 2025",
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
      title: "MS in Software Engineering and Technology",
      organization: "Chalmers University of Technology",
      period: "2025 - 2027 (Expected)",
      description: "Awarded with IPOET scholarship.",
    },
    {
      id: 4,
      type: "education",
      title: "BE in Computer Science and Engineering",
      organization: "PSG College of Technology",
      period: "2018 - 2022",
      description: "Graduated with first class distinction.",
    },
  ];

  const skills = {
    frontend: ["Flutter", "Kotlin"],
    backend: ["Java", "Spring Boot", "Python"],
    databases: ["PostgreSQL", "MongoDB", "AzureSQL", "Cosmos", "Firebase"],
    devOps: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    messaging: ["Apache Kafka", "IBMMQ"],
    tools: ["Git", "Jira", "VS Code", "Postman", "IntelliJ", "Android Studio"],
  };
  // ─────────────────────────────────────────────────────────────────────────

  const navSections = ["hero", "projects", "skills", "experience", "contact"];

  return (
    <div className="bg-background min-h-screen">
      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold gradient-text"
          >
            PM
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navSections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`relative px-3 py-2 text-sm font-medium capitalize rounded-lg transition-colors ${activeSection === section
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium capitalize transition-colors ${activeSection === section
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 pt-20 pb-16">
        {/* ── Hero ── */}
        <section
          id="hero"
          className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20"
        >
          {/* Background gradient blobs */}
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none -z-10" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight">
                Hi, I'm
                <br />
                <span className="gradient-text">Priyadarsan</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-2">
                Software Engineer
              </h2>
              <h4 className="text-sm text-muted-foreground italic mb-6">Gothenburg, Sweden</h4>
              <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
                I design and develop scalable, secure, and user-friendly software
                solutions with a strong focus on clean architecture and performance.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity border-0 shadow-lg shadow-primary/25"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border hover:bg-muted/50"
                >
                  <a
                    href="../assets/files/Priyadarsan's Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/priyadarsanmahendiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/priyadarsan-mahendiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:darsanprapanjan@gmail.com"
                  className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-20 scale-110" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                  <img
                    src="../assets/images/Priyadarsan.jpg"
                    alt="Priyadarsan Mahendiran"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to projects"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest block mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.1 }}
                className="h-full"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.image}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest block mb-2">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = skillIconMap[category] ?? Wrench;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold capitalize">
                        {category === "devOps" ? "DevOps" : category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest block mb-2">
              Career
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience & Education
            </h2>
          </motion.div>

          <ExperienceTimeline
            workExperience={experiences
              .filter((e) => e.type === "work")
              .map((e) => ({
                date: e.period,
                title: e.title,
                company: e.organization,
                description: e.description,
                skills: [],
              }))}
            education={experiences
              .filter((e) => e.type === "education")
              .map((e) => ({
                date: e.period,
                title: e.title,
                company: e.organization,
                description: e.description,
                skills: [],
              }))}
          />
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest block mb-2 text-center">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Let's Connect</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-xl mx-auto"
          >
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-center">
              I'm currently open to new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:darsanprapanjan@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium">
                    darsanprapanjan@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/priyadarsan-mahendiran/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm font-medium">
                    priyadarsan-mahendiran
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/priyadarsanmahendiran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="text-sm font-medium">
                    priyadarsanmahendiran
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-3">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Priyadarsan Mahendiran. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
