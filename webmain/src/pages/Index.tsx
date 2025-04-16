import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Globe, Mountain, Sprout } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-accent">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
            alt="Nature background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className={`text-5xl md:text-7xl font-bold text-accent mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Green Support Services
          </h1>
          <p className={`text-xl md:text-2xl text-accent/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Expert consulting in environmental conservation, sustainability, and biodiversity studies
          </p>
          <Button 
            size="lg" 
            className={`bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Learn More
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-accent mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-10 h-10" />, title: "Conservation Planning" },
              { icon: <Globe className="w-10 h-10" />, title: "Sustainability Consulting" },
              { icon: <Mountain className="w-10 h-10" />, title: "Biodiversity Studies" },
              { icon: <Sprout className="w-10 h-10" />, title: "Environmental Impact" },
            ].map((service, index) => (
              <Card key={index} className="p-6 bg-accent/5 backdrop-blur-sm border-accent/10 hover:bg-accent/10 transition-all duration-300">
                <div className="text-accent mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-accent mb-2">{service.title}</h3>
                <p className="text-accent/80">Comprehensive solutions for environmental challenges and sustainable development.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">About Us</h2>
            <p className="text-lg text-primary/80 mb-6">
              Green Support Services is dedicated to creating a sustainable future through expert environmental consulting. 
              Our team of specialists brings years of experience in conservation, sustainability, and biodiversity studies.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-accent">
              Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-accent mb-8">Get In Touch</h2>
            <p className="text-lg text-accent/80 mb-8">
              Ready to start your journey towards environmental sustainability? Contact us today.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
