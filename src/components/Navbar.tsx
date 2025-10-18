
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Blog", href: "#blog" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Set active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      setIsScrolled(window.scrollY > 20);

      // Find the active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when nav item is clicked
  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all  duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <a href="#" className={`text-lg sm:text-xl font-bold p-5 rounded-full shadow-md bg-white text-portfolio-primary ${isScrolled?'border-portfolio-accent':''}`}>
              AO
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 overflow-x-auto py-2 no-scrollbar">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`transition-all text-sm xl:text-base ${
                  activeSection === item.href.substring(1)
                    ? "text-portfolio-primary font-medium shadow-md"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`w-full justify-start ${
                  activeSection === item.href.substring(1)
                    ? "text-portfolio-primary font-medium shadow-md"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
