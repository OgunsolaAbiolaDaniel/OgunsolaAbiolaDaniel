
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { ArrowDown, ArrowUp, CalendarIcon } from "lucide-react";
import Additionalctx from "./Additionalctx";

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
    skills: ["React", "TypeScript", "Next.js", "RESTful APIs", "Responsive Design"],
     function:"My main responsibilities included contributing to the development and maintenance of web applications, collaborating with senior developers to implement user-friendly features, and integrating RESTful APIs. I also took part in code reviews, testing, and debugging to ensure high-quality results. Through this role, I developed strong communication, teamwork, and problem-solving skills."
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
    skills: ["Cordova", "JavaScript", "HTML", "CSS", "Mobile Development", "Cross-platform"],
     function:"I was responsible for developing and maintaining mobile applications, translating business requirements into functional solutions, and optimizing app performance. I worked closely with cross-functional teams and helped resolve technical issues efficiently. This internship helped me improve my adaptability, technical communication, and ability to work independently and as part of a team."
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
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"],
    function:"My tasks included creating responsive web pages, integrating interactive elements, and ensuring cross-browser compatibility. I maintained project documentation and used version control to manage code changes. This experience strengthened my time management, attention to detail, and practical problem-solving abilities."
  }
];
const  hoverstyl= "text-transparent bg-gradient-to-br from-portfolio-primary  to-portfolio-light"

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  function handleReadmore(index: number) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }


  return (
    <section id="experience" className="section-container bg-slate-50 dark:bg-gray-900">
      <h2 className="section-title">Experience</h2>
      
      <div className="space-y-10 mt-8">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          const Icon = isExpanded ? ArrowUp : ArrowDown;

          return (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-[26px] top-14 bottom-0 w-1 bg-portfolio-primary/20 -z-10"></div>
              )}

              <Card className={`border-l-4 border-l-portfolio-primary shadow-md card-hover`}>
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
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <p
                      className="text-portfolio-primary hover:underline text-sm flex items-center cursor-pointer tracking-tighter"
                      onClick={() => handleReadmore(index)}
                    >
                      <span>{isExpanded ? "Show Less" : "Read More"}</span>
                      <span>
                        <Icon size={14} className="text-sm" />
                      </span>
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "mt-4 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
                    style={{
                      maxHeight: isExpanded
                        ? `${contentRefs.current[index]?.scrollHeight ?? 0}px`
                        : "0px",
                    }}
                  >
                    <div
                      ref={(el) => {
                        contentRefs.current[index] = el;
                      }}
                    >
                      <Additionalctx arg={exp.function}></Additionalctx>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
