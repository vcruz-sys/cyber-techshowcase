import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillBadge from "@/components/SkillBadge";
import { ArrowRight, Linkedin, Shield, Code, Brain, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    "Cybersecurity",
    "Python",
    "SQL",
    "Automation",
    "Technical Analysis",
    "Problem Solving",
    "Documentation",
    "Team Leadership",
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Security-First Mindset",
      description: "Passionate about protecting systems and making technology more secure.",
    },
    {
      icon: Code,
      title: "Automation & Efficiency",
      description: "Building workflows that make systems smarter and processes faster.",
    },
    {
      icon: Brain,
      title: "Relentless Learner",
      description: "Constantly diving deep into new technologies and best practices.",
    },
    {
      icon: Users,
      title: "Collaborative Leader",
      description: "Thriving in team environments, turning ideas into real solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-display">
                I.C. Stars Cycle 19 • Erudition Tech
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="text-gradient">Victor Cruz</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Aspiring Cybersecurity Analyst & Technical Analyst
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/victorcruzalvarez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">
                  View My Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border shadow-elevated">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm <span className="text-foreground font-semibold">Victor Cruz</span>—an aspiring Cybersecurity Analyst, hands-on problem solver, and the Technical Analyst for my project group, <span className="text-primary">Erudition Tech</span>. I'm currently part of I.C. Stars Cycle 19, where every day pushes me to grow as both a leader and a technologist.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm someone who thinks calmly, works creatively, and learns relentlessly. If something piques my curiosity, I'm diving in—researching, testing, building, and improving until I understand it. Whether I'm developing automation workflows, organizing technical documentation, or experimenting with Python and SQL, I'm always looking for ways to make systems smarter and more efficient.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Erudition Tech, I bring structure and clarity to our technical challenges. I help analyze problems, break down requirements, and guide my team toward practical solutions. I'm not afraid to ask questions, listen deeply, and step up when my team needs support. Collaboration is where I thrive, and I enjoy helping ideas turn into real working solutions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  As an entry-level professional, I'm constantly learning—whether through hands-on projects, mentorship, or my own curiosity. I'm building a strong foundation in cybersecurity, automation, and software fundamentals, and I'm excited to keep leveling up.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground text-xl">
                  "My goal is simple: contribute value, grow every day, and use technology to solve real problems that make people's work easier and more secure."
                </blockquote>
              </div>

              {/* Skills */}
              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="text-sm font-display uppercase tracking-wider text-muted-foreground mb-4">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            What I <span className="text-gradient">Bring</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Interested in collaborating or learning more about my work? Check out my projects or reach out on LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/phishing-showcase">
                View Phishing Showcase
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
