
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

// Sample blog posts - replace with real content later
const blogPosts = [
  {
    title: "Getting Started with React Hooks",
    excerpt: "Learn the fundamentals of React Hooks and how they can simplify your component logic and state management.",
    date: "April 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop",
    tags: ["React", "Hooks", "JavaScript"],
    link: "#"
  },
  {
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Discover how to create beautiful, responsive user interfaces quickly using the utility-first approach of Tailwind CSS.",
    date: "March 25, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    tags: ["Tailwind CSS", "UI Design", "CSS"],
    link: "#"
  },
  {
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Improve your TypeScript skills with these best practices specifically tailored for React development workflows.",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2670&auto=format&fit=crop",
    tags: ["TypeScript", "React", "Best Practices"],
    link: "#"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section-container">
      <h2 className="section-title">Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {blogPosts.map((post, index) => (
          <Card 
            key={index} 
            className="flex flex-col h-full card-hover border-portfolio-primary/20"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <CardDescription className="line-clamp-3 text-muted-foreground mb-4">
                {post.excerpt}
              </CardDescription>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button asChild variant="ghost" className="w-full hover:bg-portfolio-primary/10 hover:text-portfolio-primary">
                <a href={post.link} className="flex items-center justify-center gap-1">
                  Read Article
                  <ArrowRight size={16} />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
          View All Articles
        </Button>
      </div>
    </section>
  );
};

export default Blog;
