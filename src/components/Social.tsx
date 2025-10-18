
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, GitBranchIcon, Image, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import GitHub from "./GitHub";

const socialImages = [
  {
    url: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2525&auto=format&fit=crop",
    title: "Coding session"
  },
  {
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
    title: "Coffee and code"
  },
  {
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
    title: "Work setup"
  },
  {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    title: "Late night coding"
  },
  {
    url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2506&auto=format&fit=crop",
    title: "Developer workspace"
  },
  {
    url: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2580&auto=format&fit=crop",
    title: "Team meeting"
  },
];

const Social = () => {
  return (
    <section id="social" className="section-container bg-slate-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="section-title">Social Lifestyle</h2>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Linkedin size={18} />
           Linkedln
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <GitBranchIcon size={18} />
          Github
          </Button>
        </div>
      </div>
      
      <p className="text-lg text-muted-foreground mb-8">
        A glimpse into my everyday life as a developer, my workspace, coding sessions, Events and more.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialImages.map((image, index) => (
          <Card 
            key={index} 
            className="overflow-hidden card-hover border-portfolio-primary/20 group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <CardContent className="p-0 relative">
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera size={16} />
                      <span className="text-sm">Lifestyle</span>
                    </div>
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button 
          variant="outline" 
          className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 flex items-center gap-2"
        >
          <Image size={18} />
          View More Photos
        </Button>
      </div>
    </section>
  );
};

export default Social;
