import { Truck, Shield, Users, Calculator, Clock, Headphones, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bulk Pricing Solutions",
      description: "Competitive volume discounts with transparent pricing structures.",
      features: ["Volume-based discounts", "Custom pricing tiers", "Long-term contracts", "Price protection"]
    },
    {
      icon: Users,
      title: "Dedicated Account Management",
      description: "Personal account managers for seamless B2B procurement.",
      features: ["Dedicated account manager", "Regular check-ins", "Custom solutions", "Strategic planning"]
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Flexible delivery options with real-time tracking.",
      features: ["Same-day delivery", "Scheduled deliveries", "Real-time tracking", "Multiple locations"]
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete paperwork and compliance documentation.",
      features: ["Certificates of compliance", "Material safety sheets", "Custom documentation", "Digital records"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and product authentication.",
      features: ["Product verification", "Quality testing", "Batch tracking", "Return guarantee"]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for urgent needs.",
      features: ["24/7 helpline", "Emergency orders", "Technical support", "Live chat"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Discuss your safety equipment needs with our experts"
    },
    {
      step: "2",
      title: "Custom Quote",
      description: "Receive detailed pricing for bulk orders and specifications"
    },
    {
      step: "3",
      title: "Order Processing",
      description: "Streamlined ordering with dedicated account management"
    },
    {
      step: "4",
      title: "Quality Check",
      description: "Rigorous quality control and product verification"
    },
    {
      step: "5",
      title: "Delivery",
      description: "Flexible delivery options with real-time tracking"
    },
    {
      step: "6",
      title: "Support",
      description: "Ongoing support and maintenance for your equipment"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">
            Our <span className="text-highlight">B2B Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive B2B solutions designed for businesses that prioritize safety. 
            From bulk procurement to ongoing support, we handle every aspect of your safety equipment needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card-modern group cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>
                <h3 className="heading-md text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-2xl p-12 mb-20">
          <h3 className="heading-md text-center mb-12">Our B2B Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="heading-md mb-6">Ready to Get Started?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our B2B specialists today for a custom quote and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Request Consultation
            </Button>
            <Button size="lg" variant="outline" className="btn-outline">
              Download Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;