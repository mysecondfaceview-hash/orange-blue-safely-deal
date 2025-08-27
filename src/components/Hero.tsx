import { ArrowRight, Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-primary font-medium">Leading B2B Safety Solutions in Saudi Arabia</span>
        </div>

        {/* Main heading */}
        <h1 className="heading-xl mb-6">
          <span className="text-foreground">BULK SAFETY</span>
          <br />
          <span className="text-highlight">REDEFINED</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Experience the future of <span className="text-primary font-semibold">Bulk B2B Safety Equipment</span> with our 
          <span className="text-secondary font-semibold"> premium branded products</span> and 
          <span className="text-primary font-semibold"> unmatched wholesale solutions</span> across the Kingdom
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button className="btn-hero flex items-center gap-2 group">
            <Truck className="w-5 h-5" />
            EXPLORE BULK CATALOG
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button className="btn-outline flex items-center gap-2">
            <Users className="w-5 h-5" />
            GET WHOLESALE QUOTE
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Premium Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Trusted Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">B2B Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;