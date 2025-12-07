import { Shield, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold text-foreground">
              Victor Cruz
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/phishing-showcase"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Phishing Showcase
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/victorcruzalvarez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@victorcruz.dev"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Victor Cruz. Securing the digital frontier.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
