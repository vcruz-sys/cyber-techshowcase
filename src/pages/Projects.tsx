import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { ArrowRight, ExternalLink, Github, Shield, Database, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Erudition Tech",
      subtitle: "Technical Analyst Role",
      description:
        "Serving as the Technical Analyst for my I.C. Stars project group, helping analyze problems, break down requirements, and guide the team toward practical, effective solutions.",
      tags: ["Team Leadership", "Technical Analysis", "Problem Solving", "Documentation"],
      icon: Shield,
      featured: true,
    },
    {
      title: "Phishing Email Analysis",
      subtitle: "Security Awareness Project",
      description:
        "A comprehensive showcase demonstrating how to identify and analyze phishing emails, helping users understand common attack vectors and protective measures.",
      tags: ["Cybersecurity", "Email Security", "Threat Analysis"],
      icon: Shield,
      link: "/phishing-showcase",
      isInternal: true,
    },
    {
      title: "Automation Workflows",
      subtitle: "Process Optimization",
      description:
        "Developing automation scripts and workflows using Python to streamline repetitive tasks and improve operational efficiency.",
      tags: ["Python", "Automation", "Scripting", "Efficiency"],
      icon: Terminal,
    },
    {
      title: "SQL Database Projects",
      subtitle: "Data Management",
      description:
        "Building and querying databases to organize, analyze, and extract meaningful insights from structured data.",
      tags: ["SQL", "Data Analysis", "Database Design"],
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A collection of work showcasing my journey in cybersecurity, automation, and technical problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative rounded-2xl border transition-all duration-300 animate-fade-in ${
                  project.featured
                    ? "bg-gradient-to-br from-primary/10 via-card to-card border-primary/30 p-8 md:p-10"
                    : "bg-gradient-card border-border hover:border-primary/50 p-6 md:p-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-display">
                    Current Focus
                  </div>
                )}

                <div className="flex items-start gap-6">
                  <div
                    className={`hidden md:flex w-14 h-14 rounded-xl items-center justify-center shrink-0 ${
                      project.featured
                        ? "bg-primary/20 glow-primary"
                        : "bg-secondary group-hover:bg-primary/10"
                    } transition-all duration-300`}
                  >
                    <project.icon className={`w-7 h-7 ${project.featured ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary font-display">{project.subtitle}</p>
                      </div>

                      {project.link && (
                        <Button variant="outline" size="sm" asChild className="shrink-0">
                          {project.isInternal ? (
                            <Link to={project.link}>
                              View
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          ) : (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </Button>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <SkillBadge key={tag} skill={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            More <span className="text-gradient">Coming Soon</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm constantly working on new projects and expanding my skills. Connect with me to stay updated on my latest work.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/victorcruzalvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
