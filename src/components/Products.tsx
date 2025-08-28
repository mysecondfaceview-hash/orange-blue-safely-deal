import { HardHat, Shield, AlertTriangle, Eye, HandMetal, Zap, Flame, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const categories = [
    {
      icon: HardHat,
      title: "Head Protection",
      description: "Safety helmets, hard hats, and protective headgear",
      products: ["Industrial Hard Hats", "Bump Caps", "Safety Helmets", "Protective Caps"],
      featured: true
    },
    {
      icon: Eye,
      title: "Eye Protection",
      description: "Safety glasses, goggles, and face shields",
      products: ["Safety Glasses", "Welding Goggles", "Face Shields", "Chemical Splash Goggles"]
    },
    {
      icon: Shield,
      title: "Body Protection",
      description: "High-visibility vests, coveralls, and protective clothing",
      products: ["Hi-Vis Vests", "Coveralls", "Aprons", "Protective Suits"]
    },
    {
      icon: HandMetal,
      title: "Hand Protection",
      description: "Work gloves, cut-resistant gloves, and hand safety",
      products: ["Work Gloves", "Cut-Resistant Gloves", "Chemical Gloves", "Heat-Resistant Gloves"]
    },
    {
      icon: Wind,
      title: "Respiratory Protection",
      description: "Masks, respirators, and breathing protection",
      products: ["N95 Masks", "Full Face Respirators", "Dust Masks", "Gas Masks"]
    },
    {
      icon: Zap,
      title: "Electrical Safety",
      description: "Insulated tools, electrical PPE, and safety equipment",
      products: ["Insulated Gloves", "Electrical Mats", "Arc Flash Suits", "Voltage Testers"]
    },
    {
      icon: Flame,
      title: "Fire Safety",
      description: "Fire extinguishers, alarms, and emergency equipment",
      products: ["Fire Extinguishers", "Smoke Detectors", "Emergency Lighting", "Fire Blankets"]
    },
    {
      icon: AlertTriangle,
      title: "Fall Protection",
      description: "Harnesses, lanyards, and height safety equipment",
      products: ["Safety Harnesses", "Lanyards", "Fall Arresters", "Rescue Equipment"]
    }
  ];

  const brands = [
    "3M", "Honeywell", "MSA", "Dräger", "Uvex", "Ansell", "Kimberly-Clark", "DuPont",
    "Miller", "Petzl", "Bullard", "North", "Jackson Safety", "Moldex", "Gateway Safety", "Ergodyne"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">
            Our <span className="text-highlight">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive safety equipment from world-renowned brands. Every product is certified, 
            authentic, and backed by our quality guarantee. Bulk pricing available for all categories.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className={`card-modern group cursor-pointer ${category.featured ? 'ring-2 ring-primary/20' : ''}`}>
                {category.featured && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-md text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {product}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  View Products
                </Button>
              </div>
            );
          })}
        </div>

        {/* Trusted Brands */}
        <div className="bg-muted/30 rounded-2xl p-12">
          <h3 className="heading-md text-center mb-12">Trusted Brand Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="bg-background rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-foreground">{brand}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="btn-hero">
              Request Brand Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;