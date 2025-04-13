
import { useEffect, ReactNode } from 'react';

// This is a simple wrapper for animation effects
// In a real application, you'd use a library like AOS or Framer Motion
// This is a basic implementation to demonstrate the concept

interface AOSProps {
  children: ReactNode;
}

const AOS = ({ children }: AOSProps) => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      const animateElements = document.querySelectorAll('[data-aos]');
      
      animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animate-fade-in-up');
          element.removeAttribute('data-aos');
        }
      });
    };
    
    // Initial check for elements in viewport
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <>{children}</>;
};

export default AOS;
