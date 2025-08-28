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
    <section className="py-32 bg-gradient-to-b from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary font-semibold text-sm mb-6">
            Enterprise Excellence
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8">
            Why Industry Leaders Choose
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
              ZGEN XPRESS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the difference with our <span className="text-primary font-semibold">premium B2B safety equipment solutions</span>, 
            designed for enterprises that prioritize quality, compliance, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  
                  {/* Premium indicator */}
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Enterprise Grade
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Premium trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              ISO 45001 Certified
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              OSHA Compliant
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Enterprise SLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;