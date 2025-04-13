import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Social from "@/components/Social";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AOS from "@/components/AOS";
import { Helmet } from "react-helmet";
import primg from '@/assets/images/img.jpeg'

const Index = () => {
  useEffect(() => {
    console.log("Portfolio initialized");
  }, []);

  return (
    <AOS>
 <Helmet>
        <title>Abiola Daniel Ogunsola - Frontend Developer</title>
        <meta
          name="description"
          content="Frontend Engineer | React, Next.js, Tailwind | Passionate about building modern, accessible, and high-performance user interfaces."
        />
        <meta property="og:title" content="Abiola Daniel Ogunsola - Frontend Developer" />
        <meta
          property="og:description"
          content="Skilled Frontend Developer passionate about design, performance, and building impactful solutions. Explore my portfolio and work."
        />
        <meta property="og:image" content="https://github.com/OgunsolaAbiolaDaniel.png" />
        <meta property="og:url" content="https://ogunsola-abiola-daniel.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <GitHub />
          <Education />
          <Certifications />
          <Blog />
          <Social />
          
          {/* Add more visual separation between sections */}
          <div className="bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/5 py-16">
            <Hobbies />
          </div>
          
          <div className="bg-gradient-to-bl from-portfolio-accent/5 to-portfolio-primary/5 py-16">
            <BookAppointment />
          </div>
          
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </AOS>
  );
};

export default Index;
