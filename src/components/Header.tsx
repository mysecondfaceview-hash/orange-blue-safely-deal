import { Phone, Mail, MapPin, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-6 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>sales@zgenxpress.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Industrial District, Safety Hub</span>
              </div>
            </div>
            <div className="text-primary font-medium">
              Trusted B2B Safety Partner Since 2015
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-foreground">
                ZGEN<span className="text-primary">XPRESS</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Products
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Bulk Orders
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <Button className="btn-hero">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;