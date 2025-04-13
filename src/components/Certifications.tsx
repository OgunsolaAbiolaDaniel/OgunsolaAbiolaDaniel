
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import bincom from './../../public/bincomcertficate.pdf'
import cloud_computing from '@/assets/images/cloud_computing.png'
import bincom_logo from '@/assets/images/bincomdevcenter_logo.jpeg'
const certifications = [
  {
    category: "Web Development",
    items: [
      {
        title: "React - The Complete Guide 2024",
        issuer: "Udemy",
        date: "2024",
        image: "https://img-c.udemycdn.com/course/480x270/4401108_2979_5.jpg",
        link: "https://www.udemy.com/certificate/UC-8b1b59c2-782b-407c-8474-a403d38d6436/",
        details: "Comprehensive React course covering core concepts, hooks, Next.js, and Redux."
      },
      {
        title: "The Complete 2024 Web Development Bootcamp",
        issuer: "Udemy",
        date: "2024",
        image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
        link: "https://www.udemy.com/certificate/UC-74467897-62f9-4d66-aa25-5687a0537191/",
        details: "Full-stack web development course covering HTML, CSS, JavaScript, Node.js, and more."
      },
       {
        title: "Introduction to Cloud Computing",
        issuer: "Coursera",
        date: "May 2023",
        image: cloud_computing,
        link: "https://www.credly.com/badges/c3803e6c-4ca4-46ae-b0b8-c01536e8e8cf/linked_in_profile",
        details: "Basics of cloud technology and is able to describe cloud platforms and models including IaaS, PaaS, SaaS, and public, private and hybrid multiclouds. The badge earner is familiar with essentials of cloud applications and terms like Virtualization, VMs, Containers, Object Storage, Microservices, Serverless, Cloud Native, and DevOps."
      }
    ]
  },
   {
    category: "Mobile Development",
    items: [
      {
        title: "Mobile App Development ",
        issuer: "Bincom Dev Center",
        date: "2024",
        image: bincom_logo,
        link: bincom,
        details: "Mobile App development course covering Cordova · JSON Bin · Mobile Applications · Android Development · Databases · Cascading Style Sheets (CSS) · Firebase · Apache Cordova · Authentication · Database · JSON · Android · Android Studio · JavaScript · CSS 3 · HTML5"
      },
    ]
  },
  {
    category: "Programming Languages",
    items: [
      {
        title: "TypeScript Masterclass",
        issuer: "Udemy",
        date: "2024",
        image: "https://img-c.udemycdn.com/course/480x270/3662358_1d69_7.jpg",
        link: "#",
        details: "Advanced TypeScript concepts and practical applications in modern web development."
      }
    ]
  },
  {
    category: "UI/UX Design",
    items: [
      {
        title: "Modern UI/UX Design",
        issuer: "Coursera",
        date: "2023",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/3c/8f7120b64e11e8a9988b3d4b90848e/Course-Logo.jpg",
        link: "#",
        details: "User-centered design principles and creating intuitive user interfaces."
      }
    ]
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container bg-slate-50 dark:bg-gray-900">
      <h2 className="section-title">Licenses & Certifications</h2>
      
      <Tabs defaultValue="Web Development" className="mt-8">
        <TabsList className="mb-8 w-full flex flex-wrap justify-start">
          {certifications.map((category) => (
            <TabsTrigger 
              key={category.category} 
              value={category.category}
              className="data-[state=active]:bg-portfolio-primary data-[state=active]:text-white"
            >
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {certifications.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((cert, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden card-hover border-portfolio-primary/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <Award className="h-6 w-6 text-portfolio-primary" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="text-muted-foreground">{cert.date}</span>
                    </div>
                    <p className="text-muted-foreground">{cert.details}</p>
                  </CardContent>
                  
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink size={16} />
                        View Certificate
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Certifications;
