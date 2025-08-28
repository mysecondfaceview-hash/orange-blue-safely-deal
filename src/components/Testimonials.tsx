import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      position: "Safety Manager",
      company: "Saudi Petrochemical Industries",
      content: "ZGEN XPRESS has been our trusted safety equipment partner for over 5 years. Their bulk pricing and quality products have helped us maintain the highest safety standards across our facilities.",
      rating: 5,
      industry: "Petrochemicals"
    },
    {
      name: "Fatima Al-Zahra",
      position: "Procurement Director",
      company: "Advanced Construction Group",
      content: "The dedicated account management and fast delivery times make ZGEN XPRESS stand out. They understand our project timelines and always deliver on time.",
      rating: 5,
      industry: "Construction"
    },
    {
      name: "Mohammed Al-Rashid",
      position: "Operations Manager",
      company: "Gulf Manufacturing Co.",
      content: "Excellent product quality and competitive pricing. Their team's expertise in safety regulations has been invaluable for our compliance requirements.",
      rating: 5,
      industry: "Manufacturing"
    },
    {
      name: "Nadia Al-Harbi",
      position: "HSE Coordinator",
      company: "Riyadh Industrial Complex",
      content: "ZGEN XPRESS provides comprehensive safety solutions with exceptional customer service. Their 24/7 support has been crucial for our emergency needs.",
      rating: 5,
      industry: "Industrial"
    },
    {
      name: "Khalid Al-Dosari",
      position: "Supply Chain Manager",
      company: "Eastern Province Mining",
      content: "The documentation support and quality assurance processes are outstanding. We can trust that every product meets our stringent safety requirements.",
      rating: 5,
      industry: "Mining"
    },
    {
      name: "Layla Al-Qasimi",
      position: "Safety Director",
      company: "National Oil Services",
      content: "Their extensive product range and brand partnerships allow us to source all our safety equipment from one reliable supplier. Highly recommended.",
      rating: 5,
      industry: "Oil & Gas"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "500+", label: "B2B Clients Served" },
    { number: "24/7", label: "Customer Support" },
    { number: "99.9%", label: "On-Time Delivery" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">
            What Our <span className="text-highlight">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. See what industry leaders across Saudi Arabia 
            say about their experience with ZGEN XPRESS.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-modern">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed italic pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-primary font-medium">{testimonial.position}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                <div className="mt-2">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="heading-md mb-4">Join Our Satisfied Clients</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the ZGEN XPRESS difference. Contact us today for a consultation 
            and see why we're the preferred safety equipment partner for businesses across Saudi Arabia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;