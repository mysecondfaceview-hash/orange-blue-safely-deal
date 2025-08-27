import { Phone, Mail, MapPin, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm text-primary-foreground">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+966 123456789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>sales@zgenxpress.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">🚀 Premium B2B Safety Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-foreground">ZGEN</span>
                <span className="text-highlight">XPRESS</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium border-b-2 border-primary">
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
            <Button className="btn-hero flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Quote Cart
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;