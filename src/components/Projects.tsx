
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import smg from '@/assets/images/scl_mgm.png'
import todo_img from '@/assets/images/todo.png'
import sparkle_png from '@/assets/images/sparkle.png'
import food from '@/assets/images/food_app.png'
import parallax from '@/assets/images/parallax.png'
import online_quiz from '@/assets/images/online_quiz.png'
import phenomenon from '@/assets/images/phenomenon.png'
// Sample projects - you should replace these with real projects
const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with React and Next.js, featuring product browsing, filtering, cart functionality,and good responsiveness and checkout process.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2670&auto=format&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    github: "https://github.com/OgunsolaAbiolaDaniel/Varkala",
    demo: "https://varkala.vercel.app/"
  },
  {
    title: "School Management App",
    description: "A fully responsive School management platform built with React and Next.js, featuring product creating, filtering, functionality.",
    image: smg,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    github: "https://github.com/OgunsolaAbiolaDaniel/School-management-app",
    demo: "https://school-management-app-six.vercel.app/"
  },
  {
    title: "Task Tracker Pro",
    description: "A time management app for productivity and application for managing tasks and projects with drag-and-drop functionality, user authentication, and real-time updates.",
    image: todo_img,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/OgunsolaAbiolaDaniel/Task-Tracker-Pro",
    demo: "https://task-tracker-pro-azure.vercel.app/"
  },
  {
    title: "Sparkle",
    description: "A demo landing Page",
    image: sparkle_png,
    technologies: ["React", "JavaScript", "TypeScript", "CSS","Vite"],
    github: "https://github.com/OgunsolaAbiolaDaniel/Sparkle",
    demo: "https://sparkle-omega.vercel.app/"
  },
   {
    title: "My Food App",
    description: "A Food ordering application, with responsive designs",
    image: food,
    technologies: ["Html", "CSS", "JavaScript","TypeScript","React","Tailwind Css","Next.js"],
    github: "https://github.com/OgunsolaAbiolaDaniel/my-food-app",
    demo: "https://my-food-app-daniel.vercel.app/"
  },{
    title: "Parallax Web Page",
    description: "A parallax webpage with nice design and parallax design implemented with Javascript for scroll animations",
    image: parallax,
    technologies: ["Html", "CSS", "JavaScript",],
    github: "https://github.com/OgunsolaAbiolaDaniel/Parallax",
    demo: "https://ogunsolaabioladaniel.github.io/Parallax/"
  },
   {
    title: "Online Brain Quiz ",
    description: "A simple quiz website with nice design with evaluations of answers .Take A quiz to see how Smart you are!",
    image: online_quiz,
    technologies: ["Html", "CSS", "JavaScript",],
    github: "https://github.com/OgunsolaAbiolaDaniel/Online-Brain-Quiz",
    demo: "https://ogunsolaabioladaniel.github.io/Online-Brain-Quiz/"
  },
  {
    title: "Phenomenon",
    description: "A simple yet responsive landing page of a service rendering company Phenomenon.",
    image: phenomenon,
    technologies: ["Html", "CSS",],
    github: "https://github.com/OgunsolaAbiolaDaniel/sample-web-Page",
    demo: "https://ogunsolaabioladaniel.github.io/sample-web-Page/"
  },
   {
    title: "Online Resume",
    description: "An Online Resume part of my first set of project",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/OgunsolaAbiolaDaniel/Curriculum-Vitae",
    demo: "https://ogunsolaabioladaniel.github.io/Curriculum-Vitae/"
  },
   {
    title: "Message Live [Android]",
    description: "An Incident Reporting Mobile App with live messaging features which updates realtime events posted by users..",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    technologies: ["HTML", "CSS","Cordova","JSON BIN"],
    github: "https://github.com/OgunsolaAbiolaDaniel/Message-Live",
    demo: "https://drive.google.com/drive/folders/1kOvnXeMCxK3MEWj2lEPkTEFpXzyVs4oF?usp=sharing"
  },
  {
    title: "Shopify Hackathon",
    description: "A shopify hackathon project used to test acessibility ",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    technologies: ["HTML", "CSS","Javascript"],
    github: "https://github.com/OgunsolaAbiolaDaniel/hackathon",
    demo: "https://ogunsolaabioladaniel.github.io/hackathon/"
  },
   {
    title: "Simple SignIn page",
    description: "A simple signIn page",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/OgunsolaAbiolaDaniel/Sign-In-Page",
    demo: "https://ogunsolaabioladaniel.github.io/Sign-In-Page/"
  },
   {
    title: "Simple Ecommerce Webpage",
    description: "A simple e-commerce webpage not responsive with basic animations",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/OgunsolaAbiolaDaniel/E-commerce-page",
    demo: "https://ogunsolaabioladaniel.github.io/E-commerce-page/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden card-hover border-portfolio-primary/20 h-full flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="pb-2 flex-grow">
              <p className="text-muted-foreground text-sm sm:text-base mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-portfolio-primary/5 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={16} />
                  <span className="hidden sm:inline">Code</span>
                </a>
              </Button>
              
              <Button variant="default" size="sm" asChild className="bg-portfolio-primary hover:bg-portfolio-secondary">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
