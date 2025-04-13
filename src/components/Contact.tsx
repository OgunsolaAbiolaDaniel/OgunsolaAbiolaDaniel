
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Download, Send } from "lucide-react";
import emailjs from 'emailjs-com';
const contactInfo = {
  email: "danabiola300@gmail.com",
  workEmail: "habiolaogunsola@gmail.com",
  location: "Seixal, Setúbal, Portugal",
  linkedin: "www.linkedin.com/in/abiola-daniel-ogunsola",
  github: "https://github.com/OgunsolaAbiolaDaniel",
  cvLink: "/Abiola_Daniel_CV.pdf" // This will be the path to your CV file
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message
  };

  emailjs
    .send(
      'service_ygxae6a',       // 🔁 Replace this with your EmailJS service ID
      'template_l1v36do', // 🔁 Replace this with your new EmailJS template ID
      templateParams,
      'VvODzTxMCkQTjVh-b'        // 🔁 Replace this with your EmailJS public key
    )
    .then(() => {
      toast({
        title: "Message sent! 😊",
        description: "Thanks for reaching out... Abiola will reply as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast({
        title: "Oops! ❌",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    });
};

  const handleDownloadCV = () => {
    toast({
      title: "Success! 📄",
      description: "Abiola Ogunsola Resume successfully downloaded... I look forward to hearing from you! 🚀",
    });
  };

  return (
    <section id="contact" className="section-container relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/5 -z-10 rounded-3xl"></div>
      
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        <div className="space-y-6" data-aos="fade-up">
          <Card className="card-hover backdrop-blur-sm bg-white/20 dark:bg-gray-900/30 border border-white/10">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-portfolio-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Personal Email</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-portfolio-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Work Email</h3>
                  <a 
                    href={`mailto:${contactInfo.workEmail}`} 
                    className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                  >
                    {contactInfo.workEmail}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-portfolio-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">{contactInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Linkedin className="h-5 w-5 text-portfolio-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a 
                    href={`https://${contactInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                  >
                    {contactInfo.linkedin}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Github className="h-5 w-5 text-portfolio-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a 
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                  >
                    {contactInfo.github.replace("https://", "")}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover backdrop-blur-sm bg-white/20 dark:bg-gray-900/30 border border-white/10">
            <CardHeader>
              <CardTitle>Download CV</CardTitle>
              <CardDescription>
                Get a copy of my latest CV to learn more about my skills and experience.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Button 
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary" 
                asChild
                onClick={handleDownloadCV}
              >
                <a 
                  href={contactInfo.cvLink} 
                  download="Abiola_Daniel_CV.pdf"
                  className="flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Card className="card-hover backdrop-blur-sm bg-white/20 dark:bg-gray-900/30 border border-white/10" data-aos="fade-up" data-aos-delay="100">
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
            <CardDescription>
              Have a question or want to work together? Send me a message!
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/50 dark:bg-gray-800/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/50 dark:bg-gray-800/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/50 dark:bg-gray-800/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/50 dark:bg-gray-800/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
