
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, School, BadgeCheck, } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import uelogo from '../../public/uploads/uelogo.jpg'
const Education = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className="mt-8 flex flex-col gap-4" data-aos="fade-up">
        <Card className="card-hover border-portfolio-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-primary/10 rounded-full -mt-16 -mr-16 hidden sm:block"></div>
          
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold">Bachelor's Degree - Computer Engineering</CardTitle>
                <CardDescription className="text-base sm:text-lg">NOVA FCT</CardDescription>
              </div>
              <div className="w-20 h-20 sm:w-20"><img src="/public/uploads/nova_4.png" alt="uevora logo"/></div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-sm sm:text-base">Jul 2025 -&gt; Present</span>
            </div>
            
            <p className="text-sm sm:text-sm sm:px-4">
              "Currently pursuing a degree in Computer Engineering, focusing on software development, 
              algorithms, data structures, and building foundational knowledge for a successful 
              career in development."
            </p>
            
            <div className="flex items-center mt-4">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-accent mr-2" />
              <span className="font-medium text-sm sm:text-base">Key areas of study:</span>
            </div>
            
            <ul className="list-disc list-inside ml-3 sm:ml-6 space-y-1 text-muted-foreground text-sm sm:text-base">
              <li>Software Engineering</li>
              <li>Web Development</li>
              <li>Computer Networking</li>
              <li>Database Management</li>
              <li>Algorithms and Data Structures</li>
            </ul>
            <div className="flex items-center mt-4">  
              <BadgeCheck className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-accent mr-2" />
              <span className="font-medium flex items-center text-sm sm:text-base"><span>Soft Skills Gained: </span>
             <div className="flex flex-wrap gap-2 sm:ml-6 max-sm:gap-3">
            <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
              Time Management
              </Badge>
               <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
              Critical Thinking
              </Badge>
               <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
              Problem Solving
              </Badge>
               <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
             Logical Reasoning
              </Badge>
                </div>
              </span>
            </div>
            
          
          </CardContent>
        </Card>
        <Card className="card-hover border-portfolio-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-primary/10 rounded-full -mt-16 -mr-16 hidden sm:block"></div>
          
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold">Bachelor's Degree - Computer Engineering</CardTitle>
                <CardDescription className="text-base sm:text-lg"><a href="https://www.uevora.pt/" className="">Universiade dé Évora</a></CardDescription>
              </div>
              <div className="w-20 h-20 sm:w-20"><img src="/public/uploads/uelogo.jpg" alt="uevora logo"/></div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-sm sm:text-base">OCT 2024 -&gt;JUL 2025</span>
            </div>
            
            <p className="text-sm sm:text-sm sm:px-4">
           " I began my studies in Computer Science at the University of Évora, completing my first year before transferring to NOVA FCT, where I am now pursuing a bachelor’s degree in Computer Engineering.
            My focus areas include software development, algorithms, and data structures, with a strong interest in building a solid foundation for a career in tech. I’ve been involved in both academic and extracurricular projects, always aiming to develop my problem-solving and practical programming skills.
            "</p>
            
            <div className="flex items-center mt-4">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-accent mr-2" />
              <span className="font-medium text-sm sm:text-base">Key areas of study:</span>
            </div>
            
            <ul className="list-disc list-inside ml-3 sm:ml-6 space-y-1 text-muted-foreground text-sm sm:text-base">
              <li>Software Engineering</li>
              <li>Web Development</li>
              <li>Computer Networking</li>
              <li>Database Management</li>
              <li>Algorithms and Data Structures</li>
            </ul>
             
            <div className="flex items-center mt-4">  
              <BadgeCheck className="h-5 w-5 sm:h-6 sm:w-8 text-portfolio-accent mr-2" />
              <span className="font-medium flex items-center text-sm sm:text-base"><span>Soft Skills Gained: </span>
             <div className="flex flex-wrap gap-2 sm:ml-6 max-sm:gap-3">
            <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
              Time Management
              </Badge>
               <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
              Critical Thinking
              </Badge>
               <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
              Problem Solving
              </Badge>
               <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
             Flexibility
                  </Badge>
                   <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
             Adaptability
              </Badge>
            <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
           Multitasking
          </Badge>
              <Badge key={''} variant="secondary" className="bg-portfolio-primary/10 hover:bg-transparent cursor-default hover:border-portfolio-primary text-portfolio-primary">
                Calm under Pressure
              </Badge>
                </div>
              </span>
            </div>
            
         
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
