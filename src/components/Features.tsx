import { Shield, Truck, Award, Headphones, Factory, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Factory,
      title: "Bulk Wholesale Pricing",
      description: "Competitive rates for large quantity orders with tiered pricing structure for maximum savings.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Award,
      title: "Premium Branded Products",
      description: "Authentic safety equipment from world-renowned brands with certified quality assurance.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Truck,
      title: "Kingdom-Wide Delivery",
      description: "Fast, reliable delivery across Saudi Arabia with real-time tracking and logistics support.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Shield,
      title: "Compliance Guaranteed",
      description: "All products meet international safety standards with full documentation and certificates.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Headphones,
      title: "Dedicated B2B Support",
      description: "24/7 professional support team specialized in bulk orders and corporate requirements.",
      gradient: "from-primary-glow to-secondary"
    },
    {
      icon: Globe,
      title: "Multi-Industry Solutions",
      description: "Comprehensive safety solutions for construction, oil & gas, manufacturing, and more.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Why Choose <span className="text-highlight">ZGEN XPRESS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for bulk B2B safety equipment with unmatched quality, 
            competitive pricing, and exceptional service across Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;