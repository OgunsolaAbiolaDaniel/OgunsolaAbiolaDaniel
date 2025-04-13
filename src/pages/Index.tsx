
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

const Index = () => {
  useEffect(() => {
    console.log("Portfolio initialized");
  }, []);

  return (
    <AOS>

      <Helmet>
    <meta name="google-site-verification" content="eXfIHOxUYC2YML_mPCUITafgfqPKdXXvy3IRzoBm4qs" />
  <title>Abiola Daniel Ogunsola | Frontend Developer</title>
  <meta
    name="description"
    content="Hi, I'm Abiola Daniel Ogunsola — a Frontend Developer passionate about building clean, modern, and responsive web applications using React and Vite."
  />
  <meta
    name="keywords"
    content="Abiola Ogunsola, Frontend developer, React developer, JavaScript, TypeScript, Vite, portfolio, GitHub, LinkedIn"
  />
  <meta name="author" content="Abiola Daniel Ogunsola" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph / LinkedIn Preview */}
  <meta property="og:title" content="Abiola Daniel Ogunsola | Frontend Developer" />
  <meta
    property="og:description"
    content="Explore my portfolio — projects, skills, and contact info. Let's build something great together!"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ogunsola-abiola-daniel.vercel.app/" />
  <meta
    property="og:image"
    content="https://ogunsola-abiola-daniel.vercel.app/preview.jpg"
  />

  {/* Canonical URL for SEO */}
  <link rel="canonical" href="https://ogunsola-abiola-daniel.vercel.app/" />
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
