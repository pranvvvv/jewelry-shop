
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Send, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Custom Jewellery Design',
    'Wedding Collection Consultation',
    'Jewellery Repair & Maintenance',
    'Gold Exchange',
    'Personal Shopping Session',
    'Jewellery Valuation',
    'Other'
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', 
    '6:00 PM', '7:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `*New Booking Request*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Service:* ${formData.service}
*Preferred Date:* ${formData.date || 'Not specified'}
*Preferred Time:* ${formData.time || 'Not specified'}
*Additional Message:* ${formData.message || 'None'}

Thank you for choosing Chandrashekar Jewellery Works!`;

    const whatsappNumber = '9059731884';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your booking request is being sent via WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-50 via-white to-gold-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gold-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gold-700 hover:text-gold-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-serif font-bold text-gray-900">Book Your Appointment</h1>
              <p className="text-gold-600 font-medium">Chandrashekar Jewellery Works</p>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gold-200">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Why Book with Us?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Personal Consultation</h3>
                      <p className="text-gray-600">One-on-one consultation with our expert jewellers to understand your vision and preferences.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600">Choose a time that works best for you. We're open 6 days a week with extended hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Confirmation</h3>
                      <p className="text-gray-600">Instant confirmation and easy communication through WhatsApp for your convenience.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold-600 to-gold-700 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-serif font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+91 8008668343</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>Vishwacharan2255@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span>Mon-Sat: xx AM - xx PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gold-200">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
                Schedule Your Visit
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl bg-[#B98C20] hover:bg-[#a97f1d] text-white py-2 px-4 rounded-xl mt-4 transition-all duration-300 w-full h-12"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl bg-[#B98C20] hover:bg-[#a97f1d] text-white py-2 px-4 rounded-xl mt-4 transition-all duration-300 w-full h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full rounded-xl bg-[#B98C20] hover:bg-[#a97f1d] text-white py-2 px-4 rounded-xl mt-4 transition-all duration-300 w-full h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gold-300 focus:border-gold-500 focus:ring-gold-500 h-12 px-4 bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full rounded-xl bg-[#B98C20] hover:bg-[#a97f1d] text-white py-2 px-4 rounded-xl mt-4 transition-all duration-300 w-full  h-12"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gold-300 focus:border-gold-500 focus:ring-gold-500 h-12 px-4 bg-white"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Additional Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements, budget, or any specific designs you have in mind..."
                    rows={4}
                    className="w-full rounded-xl bg-[#B98C20] hover:bg-[#a97f1d] text-white py-2 px-4 rounded-xl mt-4 transition-all duration-300 w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Booking Request
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <p className="text-sm text-gray-600 mt-6 text-center">
                By submitting this form, you'll be redirected to WhatsApp to complete your booking request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
