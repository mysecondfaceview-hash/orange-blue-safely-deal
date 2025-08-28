import { Shield, Users, Award, Target, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "2015", label: "Established" },
    { number: "10,000+", label: "Products Supplied" },
    { number: "500+", label: "B2B Clients" },
    { number: "50+", label: "Safety Brands" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every product we supply meets international safety standards and certifications."
    },
    {
      icon: Users,
      title: "B2B Excellence",
      description: "Dedicated support teams for bulk orders and enterprise solutions."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control ensures authentic, premium safety equipment."
    },
    {
      icon: Target,
      title: "Precision Delivery",
      description: "On-time delivery with comprehensive tracking and logistics support."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">
            About <span className="text-highlight">ZGEN XPRESS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2015, ZGEN XPRESS has been the trusted partner for businesses across Saudi Arabia, 
            providing premium safety equipment at scale. Our commitment to quality, reliability, and 
            exceptional B2B service has made us the go-to choice for enterprises seeking safety solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-muted/30 rounded-2xl p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-md mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower businesses with world-class safety equipment through seamless B2B procurement, 
              competitive bulk pricing, and unmatched customer service. We believe that workplace safety 
              should never be compromised, and we're committed to making premium safety solutions accessible 
              to businesses of all sizes.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="heading-md text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card-modern text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;