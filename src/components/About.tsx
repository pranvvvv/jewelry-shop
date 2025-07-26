
import { Award, Shield, Heart, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "25+ Years of Excellence",
      description: "Quarter century of experience in crafting the finest 916 gold jewellery with unmatched quality and artistry."
    },
    {
      icon: Shield,
      title: "Certified Purity",
      description: "Every piece is hallmarked and certified for 916 gold purity, ensuring you get authentic quality jewellery."
    },
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Each design is meticulously handcrafted by our skilled artisans who pour their passion into every detail."
    },
    {
      icon: Clock,
      title: "Timeless Designs",
      description: "Our collections blend traditional heritage with contemporary aesthetics for timeless appeal."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            About <span className="text-gold-600">Chandrashekar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A legacy of trust, quality, and exquisite craftsmanship in the world of fine jewellery manufacturing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=500&fit=crop&auto=format"
              alt="Jewellery craftsmanship"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Heritage of Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established with a vision to create exceptional 916 gold jewellery, Chandrashekar Jewellery Works has been the trusted name for discerning women who appreciate fine craftsmanship and timeless beauty.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our master craftsmen combine traditional techniques passed down through generations with modern design sensibilities to create pieces that are not just jewellery, but works of art that celebrate femininity and elegance.
            </p>

            {/* Mission Statement */}
            <div className="bg-gold-50 p-6 rounded-2xl border-l-4 border-gold-500">
              <h4 className="text-xl font-serif font-semibold text-gray-900 mb-3">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To craft exceptional 916 gold jewellery that empowers women to express their unique style while preserving the rich traditions of Indian craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gold-50 to-champagne-50 border border-gold-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-gold-600" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
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

export default About;
