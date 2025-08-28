import { ArrowRight, Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background via-background to-muted/20 pt-20 pb-32 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 text-primary font-semibold text-sm mb-8 shadow-premium backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            Premium B2B Safety Solutions
            <span className="ml-3 px-2 py-1 bg-primary/20 rounded-full text-xs font-bold">ENTERPRISE</span>
          </div>

          {/* Hero heading with enhanced typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] text-foreground mb-8">
            <span className="block">Professional Safety</span>
            <span className="block bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              Equipment
            </span>
            <span className="block text-secondary font-light">at Enterprise Scale</span>
          </h1>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Trusted by industry leaders for <span className="text-primary font-semibold">premium safety solutions</span>. 
            Competitive enterprise pricing, dedicated account management, and streamlined procurement workflows.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button size="lg" className="btn-hero text-lg px-12 py-5 shadow-premium hover:shadow-premium-hover transform hover:scale-105 transition-all duration-300">
              <span className="mr-2">💼</span>
              Browse Enterprise Catalog
            </Button>
            <Button size="lg" variant="outline" className="btn-outline text-lg px-12 py-5 border-2 hover:shadow-premium transition-all duration-300">
              <span className="mr-2">📋</span>
              Request Custom Quote
            </Button>
          </div>

          {/* Premium Stats Section */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mb-3">500+</div>
                <div className="text-muted-foreground font-semibold text-lg">Premium Products</div>
                <div className="text-sm text-muted-foreground/80 mt-1">Certified & Compliant</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-3">50+</div>
                <div className="text-muted-foreground font-semibold text-lg">Trusted Brands</div>
                <div className="text-sm text-muted-foreground/80 mt-1">Global Partnerships</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent mb-3">24/7</div>
                <div className="text-muted-foreground font-semibold text-lg">Enterprise Support</div>
                <div className="text-sm text-muted-foreground/80 mt-1">Dedicated Account Managers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;