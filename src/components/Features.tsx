import { Shield, Truck, Award, Factory, Headphones, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Certified Safety Standards",
      description: "All equipment meets or exceeds industry safety certifications and compliance requirements."
    },
    {
      icon: Truck,
      title: "Bulk Order Fulfillment",
      description: "Streamlined logistics for large orders with flexible delivery scheduling and tracking."
    },
    {
      icon: Award,
      title: "Premium Brand Partners",
      description: "Exclusive partnerships with leading safety manufacturers for authentic products."
    },
    {
      icon: Factory,
      title: "Fast Procurement",
      description: "Expedited processing and shipping for urgent safety equipment requirements."
    },
    {
      icon: Headphones,
      title: "Dedicated B2B Support",
      description: "Specialized account managers for personalized service and bulk pricing consultation."
    },
    {
      icon: Globe,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure every product meets our high standards."
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
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="card-modern group cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-md text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;