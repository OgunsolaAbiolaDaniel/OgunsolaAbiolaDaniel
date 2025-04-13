
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 to-portfolio-accent/10 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <div className="space-y-6 md:space-y-8 animate-fade-in py-8 md:py-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white break-words">
            <span className="block">ABIOLA DANIEL</span>
            <span className="block mt-2 text-portfolio-accent">OGUNSOLA</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-100">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-accent to-white">React Developer</span>
          </h2>
          
          <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200 px-2">
            Building responsive, user-friendly web applications with clean and efficient code.
          </p>
          
          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white backdrop-blur-lg bg-opacity-80"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-primary bg-transparent text-portfolio-primary font-medium hover:bg-portfolio-primary/10"
              onClick={() => {
                window.open('/Abiola_Daniel_CV.pdf', '_blank');
              }}
            >
              View Cv
            </Button>
          </div>
        </div>
        
    
      </div>
      <div className="absolute w-full justify-center  bottom-10 flex  min-md:left-1/2 transform -translate-x-1/2 animate-bounce-light">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-white hover:bg-white/10"
            onClick={scrollToAbout}
          >
            <ArrowDown size={24} />
          </Button>
        </div>
    </section>
  );
};

export default Hero;
