import { ArrowRight, Phone, FileText, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-secondary-foreground mb-6">
            Ready to Secure Your Workplace?
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of businesses across Saudi Arabia who trust ZGEN XPRESS 
            for their safety equipment needs. Get started with a custom quote today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
              Call for Instant Quote
            </h3>
            <p className="text-secondary-foreground/70 mb-4">
              Speak with our B2B specialists
            </p>
            <Button variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              +966 11 234 5678
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
              Request Custom Quote
            </h3>
            <p className="text-secondary-foreground/70 mb-4">
              Get detailed pricing for bulk orders
            </p>
            <Button variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Get Quote Now
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
              Browse Catalog
            </h3>
            <p className="text-secondary-foreground/70 mb-4">
              Explore our complete product range
            </p>
            <Button variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              View Products
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-lg">
            Start Your Order Today
            <ArrowRight className="h-6 w-6 ml-2" />
          </Button>
          <p className="text-secondary-foreground/60 mt-4 text-sm">
            Trusted by 500+ businesses • 24/7 support • Competitive bulk pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;