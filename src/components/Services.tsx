
import { Gem, Palette, Wrench, Users, ShoppingBag, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Gem,
      title: "Custom Jewellery Design",
      description: "Bring your dream jewellery to life with our bespoke design services. Our master craftsmen work closely with you to create unique pieces that reflect your personal style.",
      features: ["Personalized consultation", "3D design visualization", "Unlimited revisions", "Expert craftsmanship"]
    },
    {
      icon: Palette,
      title: "Traditional Collections",
      description: "Explore our exquisite range of traditional Indian jewellery including temple jewellery, antique designs, and heritage pieces perfect for special occasions.",
      features: ["Temple jewellery", "Antique designs", "Bridal sets", "Heritage collections"]
    },
    {
      icon: Wrench,
      title: "Repair & Restoration",
      description: "Give new life to your cherished pieces with our expert repair and restoration services. We handle everything from simple fixes to complete makeovers.",
      features: ["Professional cleaning", "Stone replacement", "Chain repair", "Antique restoration"]
    },
    {
      icon: Users,
      title: "Bridal Consultation",
      description: "Make your special day even more memorable with our comprehensive bridal jewellery consultation. We help you choose the perfect pieces for your wedding.",
      features: ["Bridal sets", "Matching accessories", "Custom designs", "Styling advice"]
    },
    {
      icon: ShoppingBag,
      title: "Online Shopping",
      description: "Browse and purchase our entire collection online with secure payment options and doorstep delivery. Shop from the comfort of your home.",
      features: ["Secure payments", "Home delivery", "Return policy", "Virtual try-on"]
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Schedule a personal consultation at our showroom to experience our jewellery collection firsthand and get expert advice from our designers.",
      features: ["Personal consultation", "Design discussions", "Quality inspection", "Flexible timing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gold-50 via-champagne-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-gold-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive jewellery services designed to meet all your needs, from custom design to expert maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-100 group hover:border-gold-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 rounded-full font-medium transition-all duration-300 group-hover:shadow-lg">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gold-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Ready to Create Something Beautiful?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss your jewellery needs and bring your vision to life with our expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full text-lg font-medium">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="bg-[#B98C20] hover:bg-white text-white py- px-2 rounded-2xl mt- transition-all duration-300 w-full">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
