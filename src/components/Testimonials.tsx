
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The most beautiful jewellery I've ever owned! The craftsmanship is exceptional and the gold quality is exactly as promised. Chandrashekar Jewellery Works has made my wedding day even more special.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&auto=format"
    },
    {
      id: 2,
      name: "Kavitha Reddy",
      location: "Bangalore",
      rating: 5,
      text: "I've been a customer for over 5 years now. Their custom design service is amazing - they brought my grandmother's vintage design back to life perfectly. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format"
    },
    {
      id: 3,
      name: "Meera Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Excellent service and beautiful jewellery! The team is very knowledgeable and helped me choose the perfect pieces for my daughter's wedding. The quality is outstanding.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format"
    },
    {
      id: 4,
      name: "Anitha Kumar",
      location: "Chennai",
      rating: 5,
      text: "The temple jewellery collection is absolutely stunning. Each piece reflects traditional artistry with modern finishing. I'm so happy with my purchase!",
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=100&h=100&fit=crop&auto=format"
    },
    {
      id: 5,
      name: "Deepika Rao",
      location: "Hyderabad",
      rating: 5,
      text: "Outstanding quality and service! They delivered exactly what they promised within the timeline. The bridal set I ordered was beyond my expectations.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&auto=format"
    },
    {
      id: 6,
      name: "Lakshmi Nair",
      location: "Kerala",
      rating: 5,
      text: "The repair service saved my grandmother's necklace beautifully. They restored it to its original glory while maintaining its antique charm. Truly professional work!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&auto=format"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gold-50 via-champagne-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            What Our <span className="text-gold-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied customers who trust us with their most precious moments.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-600 mb-2">5000+</div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-600 mb-2">4.9</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-100 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-gold-200" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gold-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same exceptional quality and service that our customers love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
                Share Your Experience
              </button>
              <button className="border border-gold-300 text-gold-700 hover:bg-gold-50 px-6 py-3 rounded-full font-medium transition-colors duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
