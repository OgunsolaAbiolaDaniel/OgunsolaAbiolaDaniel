import { Gamepad2, Globe, Code, Utensils, Table, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HobbyProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HobbyCard = ({ icon, title, description }: HobbyProps) => (
  <Card className="card-hover backdrop-blur-sm bg-white/20 dark:bg-gray-900/10 border border-white/10 h-full">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-2">
        <div className="text-portfolio-primary">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Hobbies = () => {
  const hobbies = [
    {
      icon: <Table className="h-6 w-6" />,
      title: "Table Tennis",
      description: "Enjoying competitive matches and improving my reflexes through regular practice."
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Gaming",
      description: "FIFA 25, Call of Duty Warzone, and other strategic and competitive games in my free time."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Traveling",
      description: "Exploring new places, cultures and expanding my worldview through travel experiences."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Coding",
      description: "Building personal projects and learning new technologies beyond work requirements."
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Food",
      description: "Discovering diverse cuisines and occasionally experimenting with cooking new recipes."
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Surfing",
      description: "Enjoying the Portuguese coast and catching waves when the weather permits."
    }
  ];

  return (
    <section id="hobbies" className="section-container">
      <h2 className="section-title">Hobbies & Interests</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {hobbies.map((hobby, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <HobbyCard {...hobby} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
