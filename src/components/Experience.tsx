
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowDown01Icon, BriefcaseIcon, CalendarIcon } from "lucide-react";

const experiences = [
  {
    company: "TROCAH",
    position: "Junior Frontend Developer",
    period: "03-2025 – Present",
    description: [
      "Contributed to developing and maintaining dynamic, responsive web applications using React, TypeScript, and Next.js",
      "Worked with senior developers to implement user-friendly features across different browsers and devices",
      "Consumed and integrated RESTful APIs to deliver dynamic data-driven experiences",
      "Optimized web performance, including improving page load times and ensuring efficient data handling",
      "Participated in code reviews, testing and debugging web applications"
    ],
    skills: ["React", "TypeScript", "Next.js", "RESTful APIs", "Responsive Design"]
  },
  {
    company: "BINCOM DEV-CENTER NIGERIA",
    position: "Mobile App Developer",
    period: "08-2024 - 09-2024",
    description: [
      "Developed and maintained mobile applications using Cordova",
      "Designed and implemented interactive and responsive mobile features",
      "Delivered cross-platform mobile solutions for Android and iOS",
      "Translated business requirements into functional mobile applications",
      "Applied best practices in mobile development, optimizing app performance",
      "Used HTML, CSS, and JavaScript to build and maintain mobile web views",
      "Debugged and resolved technical issues to improve app functionality"
    ],
    skills: ["Cordova", "JavaScript", "HTML", "CSS", "Mobile Development", "Cross-platform"]
  },
  {
    company: "INTERNCHOICE India",
    position: "Frontend Web Developer",
    period: "11-2023 - 12-2023",
    description: [
      "Created responsive web pages using HTML, CSS, and JavaScript",
      "Designed and integrated interactive elements to enhance user engagement",
      "Optimized front-end performance through efficient coding practices",
      "Translated design mockups into fully functional web pages",
      "Performed testing and debugging for cross-browser compatibility",
      "Maintained detailed documentation and used version control (Git)"
    ],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-slate-50 dark:bg-gray-900">
      <h2 className="section-title">Experience</h2>
      
      <div className="space-y-10 mt-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative" 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            {index < experiences.length - 1 && (
              <div className="absolute left-[26px] top-14 bottom-0 w-1 bg-portfolio-primary/20 -z-10"></div>
            )}
            
            <Card className="border-l-4 border-l-portfolio-primary shadow-md card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold text-portfolio-primary">
                      {exp.position}
                    </CardTitle>
                    <p className="text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2 text-portfolio-accent">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex max-md:flex-col gap-5 itema-center justify-between ">

                  <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                  <p className="text-portfolio-primary hover:text-portfolio-light text-sm flex items-center tracking-tighter"><span>Read More</span><span><ArrowDown size={14} className="text-sm"></ArrowDown></span></p>
                </div>
                



              </CardContent>


            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
