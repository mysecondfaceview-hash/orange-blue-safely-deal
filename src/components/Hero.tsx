import { ArrowRight, Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-background pt-20 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Premium B2B Safety Solutions
          </div>

          {/* Main heading */}
          <h1 className="heading-xl text-foreground mb-6">
            Professional Safety
            <br />
            <span className="text-highlight">Equipment</span> at Scale
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Source premium safety equipment from trusted brands. Competitive bulk pricing, 
            dedicated B2B support, and streamlined procurement for your business needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="btn-hero text-lg px-10 py-4">
              Browse Catalog
            </Button>
            <Button size="lg" variant="outline" className="btn-outline text-lg px-10 py-4">
              Request Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Trusted Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">B2B Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;