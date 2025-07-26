
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: ["", "bapu nagar, langer house", "hyd - 500008"],
      link: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 8008668343", "+91 8008668343"],
      link: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["Vishwacharan2255@gmail.com", "Vishwacharan2255@gmail.com"],
      link: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: xx AM   xxPM", "Sunday: xxAM -xxPM"],
      link: "Book Appointment"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Get In <span className="text-gold-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out to us for consultations, custom designs, or any questions about our jewellery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                      <button className="text-gold-600 hover:text-gold-700 font-medium mt-2 transition-colors duration-300">
                        {info.link} →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-gray-100 rounded-3xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-gradient-to-br from-gold-50 to-champagne-50 p-8 rounded-3xl border border-gold-200">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your first name"
                      className="bg-[#B98C20] hover:bg-[#a97f1d] text-white py-3 rounded-full mt-4 transition-all duration-300 w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your last name"
                      className="bg-[#B98C20] hover:bg-[#a97f1d] text-white py-3 rounded-full mt-4 transition-all duration-300 w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-[#B98C20] hover:bg-[#a97f1d] text-white py-3 rounded-full mt-4 transition-all duration-300 w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-[#B98C20] hover:bg-[#a97f1d] text-white py-3 rounded-full mt-4 transition-all duration-300 w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    placeholder="What is this regarding?"
                    className="bg-[#B98C20] hover:bg-[#a97f1d] text-white py-3 rounded-full mt-4 transition-all duration-300 w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    rows={5}
                    className="w-full rounded-xl  bg-[#B98C20] hover:bg-[#a97f1d] text-white py-3 transition-all duration-300"
                    required
                  />
                </div>

                <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>

              <p className="text-sm text-gray-600 mt-6 text-center">
                We'll respond to your message within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
