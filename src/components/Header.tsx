
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="krimson-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary tracking-wider">KRIMSON</span>
            <span className="hidden sm:inline-block text-lg font-medium tracking-wide">TECHNOLOGIES</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <Button variant="outline" className="krimson-button">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-background border-b border-border z-40 transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          <a 
            href="#services" 
            className="px-4 py-2 text-foreground hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="px-4 py-2 text-foreground hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="px-4 py-2 text-foreground hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="px-4 py-2 text-foreground hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="krimson-button w-full mt-2">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
