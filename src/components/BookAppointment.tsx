import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from 'emailjs-com';

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const BookAppointment = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
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

  if (!date || !time) {
    toast({
      title: "Error",
      description: "Please select both date and time for your appointment",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    date: format(date, "PPP"),
    time: time,
    message: formData.message,
  };

  emailjs
    .send(
      "service_ygxae6a",     // 🔁 Replace this
      "template_xkca6hq",    // 🔁 Replace this
      templateParams,
      "VvODzTxMCkQTjVh-b"      // 🔁 Replace this
    )
    .then(() => {
      toast({
        title: "Appointment Booked! 📅",
        description: `Thanks, ${formData.name}. We'll chat on ${templateParams.date} at ${templateParams.time}.`,
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setDate(undefined);
      setTime(undefined);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      toast({
        title: "Something went wrong",
        description: "Could not send your request. Please try again.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
};

  return (
    <section id="book-appointment" className="section-container relative">
      <h2 className="section-title">Book an Appointment</h2>
      
      <Card className="card-hover backdrop-blur-sm bg-white/20 dark:bg-gray-900/30 border border-white/10 mt-8 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Schedule a Meeting</CardTitle>
          <CardDescription>
            Book a time slot to discuss potential collaborations, projects or just to have a chat!
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit}  className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="appointment-name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="appointment-name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/50 dark:bg-gray-800/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="appointment-email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="appointment-email"
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
              <label htmlFor="appointment-subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="appointment-subject"
                name="subject"
                placeholder="Meeting subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white/50 dark:bg-gray-800/50"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full flex justify-between text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => 
                        date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                        date > new Date(new Date().setMonth(new Date().getMonth() + 3))
                      }
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Time</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full flex justify-between text-left font-normal",
                        !time && "text-muted-foreground"
                      )}
                    >
                      {time ? time : <span>Pick a time</span>}
                      <Clock className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-0" align="start">
                    <div className="py-2 max-h-60 overflow-y-auto">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot}
                          className={cn(
                            "px-4 py-2 cursor-pointer hover:bg-muted",
                            time === slot && "bg-primary text-primary-foreground hover:bg-primary"
                          )}
                          onClick={() => {
                            setTime(slot);
                            document.body.click(); // This closes the popover
                          }}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="appointment-message" className="text-sm font-medium">
                Additional Details
              </label>
              <Textarea
                id="appointment-message"
                name="message"
                placeholder="Any specific topics you'd like to discuss?"
                rows={3}
                value={formData.message}
                onChange={handleChange}
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
                  Booking...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={18} />
                  Book Appointment
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default BookAppointment;
