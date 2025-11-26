import { Card } from "@/components/ui/card";
import { Camera, Palette, TrendingUp } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Camera,
      title: "Videographer",
      description: "Video production, cinematography, photo and video editing, visual storytelling, camera operation, lighting setup, and creative direction",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Consistent development of elements such as logos, colours, typography, and brand messages that create strong brand identity",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Social Media",
      description: "Content creation, social media management, content strategy, audience engagement, analytics and optimization",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in <span className="text-primary font-semibold">Branding</span>, <span className="text-secondary font-semibold">Social Media</span>, and <span className="text-primary font-semibold">Videography</span>. 
            I have worked with clients in various industries such as finance, publishing, food and beverage, and culture, bringing their visions to life through compelling visual content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
