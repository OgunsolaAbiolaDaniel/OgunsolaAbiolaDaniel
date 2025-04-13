
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Rocket, Monitor, 
  Cpu, GitBranch, Figma 
} from "lucide-react";

const techStacks = [
  { name: "Frontend Basics", skills: ["HTML", "CSS", "JavaScript"], icon: <Monitor className="h-6 w-6 text-portfolio-primary" /> },
  { name: "Modern JavaScript", skills: ["TypeScript", "React", "Next.js"], icon: <Code className="h-6 w-6 text-portfolio-primary" /> },
  { name: "Styling", skills: ["Tailwind CSS", "Bootstrap"], icon: <Rocket className="h-6 w-6 text-portfolio-primary" /> },
  { name: "State Management", skills: ["Redux", "Context API"], icon: <Cpu className="h-6 w-6 text-portfolio-primary" /> },
  { name: "Version Control", skills: ["Git", "GitHub"], icon: <GitBranch className="h-6 w-6 text-portfolio-primary" /> },
  { name: "Tools", skills: ["RESTful APIs", "Figma", "C"], icon: <Figma className="h-6 w-6 text-portfolio-primary" /> },
];

const About = () => {
  return (
    <section id="about" className="section-container cursor-none">
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="section-title">About Me</h2>
          <img 
            src="/lovable-uploads/cdf54ac2-6bfe-4555-8d10-b0e2400a34a0.png" 
            alt="Abiola Daniel Ogunsola" 
            className="rounded-lg shadow-md mx-auto md:mx-0 max-w-full h-auto mb-8 md:mb-0"
          />
        </div>
        
        <div className="md:col-span-2 space-y-6" data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg leading-relaxed">
            I'm a skilled Frontend Developer with Expertise in <strong>REACT, Typescript, Next.JS, JavaScript, HTML, CSS and Tailwind CSS</strong>. 
            I specialize in building responsive, user-friendly web-applications with clean and efficient code.
          </p>
          
          <p className="text-lg leading-relaxed">
            Known for my adaptability, problem-solving mindset, and eagerness to learn, 
            I thrive in both independent and collaborative development environments.
          </p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Technology Stacks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStacks.map((stack, index) => (
                <Card key={index} className="card-hover border-portfolio-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      {stack.icon}
                      <h4 className="font-medium">{stack.name}</h4>
                    </div>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      {stack.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-portfolio-accent mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
