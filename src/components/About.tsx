
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Rocket, Monitor, 
  Cpu, GitBranch, Figma 
} from "lucide-react";
import { ReactSVG } from "react";

const techStacks = [
  { name: "Programming Languages", skills: ["C programming", "JavaScript", "Java"], icon: Code },
  { name: "Frontend Basics", skills: ["HTML", "CSS", "JavaScript"], icon: Monitor  },
  { name: "Modern JavaScript", skills: ["TypeScript", "React", "Next.js"], icon: Code },
  { name: "Styling", skills: ["Tailwind CSS", "Bootstrap"], icon:Rocket },
  { name: "State Management", skills: ["Redux", "Context API"], icon: Cpu  },
  { name: "Version Control", skills: ["Git", "GitHub"], icon: GitBranch },
  { name: "Tools", skills: ["RESTful APIs", "Figma"], icon: Figma},
];

const About = () => {
  return (
    <section id="about" className="section-container cursor-none">
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="section-title">About Me</h2>
          <img 
            src="/uploads/cdf54ac2-6bfe-4555-8d10-b0e2400a34a0.png" //TODO CHANGE MY CV
            alt="Abiola Daniel Ogunsola" 
            className="rounded-lg shadow-md mx-auto md:mx-0 max-w-full h-auto mb-8 md:mb-0"
          />
        </div>
        
        <div className="md:col-span-2 space-y-6" data-aos="fade-up" data-aos-delay="100">
         <p className="text-lg leading-relaxed">
       I’m passionate about technology and love learning through real projects and hands-on experiences. My journey so far has helped me develop strong learning capacity, adaptability, and a problem-solving mindset. I’m always eager to take on new challenges, work in different environments, and keep improving myself—whether collaborating with a team or working independently.
</p>
          <p className="text-lg leading-relaxed">
            I believe that flexibility and openness to change are key to both personal and professional growth. What I value most in a company is a culture of learning and teamwork—an environment where people support each other and encourage continuous development. This kind of setting helps me grow faster and make a real impact as part of the team and the organization.</p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Technology Stacks</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStacks.map((stack, index) => {
                const Icon = stack.icon as React.ElementType;
            return(<Card key={index} className="card-hover hover:bg-portfolio-primary hover:text-white group border-portfolio-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3 ">
                      <Icon className="h-6 w-6 text-portfolio-primary group-hover:text-white transition-colors" />
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
                </Card>)
        
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
