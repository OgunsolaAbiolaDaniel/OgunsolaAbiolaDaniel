
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, School } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className="mt-8" data-aos="fade-up">
        <Card className="card-hover border-portfolio-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-primary/10 rounded-full -mt-16 -mr-16 hidden sm:block"></div>
          
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold">Bachelor's Degree - Computer Engineering</CardTitle>
                <CardDescription className="text-base sm:text-lg">Universiade dé Évora</CardDescription>
              </div>
              <School className="h-8 w-8 sm:h-10 sm:w-10 text-portfolio-primary" />
            </div>
          </CardHeader>
          
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span className="text-sm sm:text-base">2024 - Present</span>
            </div>
            
            <p className="text-base sm:text-lg">
              Currently pursuing a degree in Computer Engineering, focusing on software development, 
              algorithms, data structures, and building foundational knowledge for a successful 
              career in development.
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
