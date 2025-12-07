import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/phishing-showcase", label: "Phishing Showcase" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-lg text-foreground">
              Victor<span className="text-primary">Cruz</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="nav"
                asChild
                className={cn(
                  location.pathname === link.href && "text-primary"
                )}
              >
                <Link to={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button variant="outline" size="sm" asChild className="ml-4">
              <a
                href="https://www.linkedin.com/in/victorcruzalvarez"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-fade-in">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                asChild
                className={cn(
                  "justify-start",
                  location.pathname === link.href && "text-primary bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Link to={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button variant="outline" size="sm" asChild className="mt-2">
              <a
                href="https://www.linkedin.com/in/victorcruzalvarez"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
