import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+966 11 234 5678", "+966 50 123 4567"],
      description: "24/7 Emergency Support Available"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["sales@zgenxpress.com", "support@zgenxpress.com"],
      description: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["King Fahd Industrial District", "Riyadh, Saudi Arabia 12345"],
      description: "Visit our safety equipment showroom"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Friday - Saturday: 9:00 AM - 3:00 PM"],
      description: "Emergency orders accepted 24/7"
    }
  ];

  const offices = [
    {
      city: "Riyadh",
      address: "King Fahd Industrial District, Building 15",
      phone: "+966 11 234 5678",
      manager: "Ahmed Al-Rashid"
    },
    {
      city: "Jeddah",
      address: "Industrial City, Block A, Unit 25",
      phone: "+966 12 345 6789",
      manager: "Mohammed Al-Harbi"
    },
    {
      city: "Dammam",
      address: "Dammam Industrial Complex, Zone 3",
      phone: "+966 13 456 7890",
      manager: "Khalid Al-Dosari"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6">
            Contact <span className="text-highlight">ZGEN XPRESS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get in touch with our B2B specialists for custom quotes, bulk orders, 
            and expert consultation on safety equipment solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="card-modern">
            <h3 className="heading-md mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company *
                  </label>
                  <Input placeholder="Enter company name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input placeholder="Enter phone number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input placeholder="Enter message subject" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your safety equipment needs, quantity requirements, and timeline..."
                  className="h-32"
                />
              </div>
              <Button size="lg" className="btn-hero w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="heading-md mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-primary font-medium">
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Need Immediate Assistance?
              </h4>
              <p className="text-muted-foreground mb-4">
                For urgent orders or emergency safety equipment needs, contact our 24/7 hotline.
              </p>
              <Button variant="outline" className="w-full">
                <MessageSquare className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h3 className="heading-md text-center mb-12">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="card-modern text-center">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {office.city} Office
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>{office.address}</p>
                  <p className="font-medium text-primary">{office.phone}</p>
                  <p className="text-sm">Manager: {office.manager}</p>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Get Directions
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;