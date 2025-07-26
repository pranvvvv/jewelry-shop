
import { useState } from 'react';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'rings', name: 'Rings' },
    { id: 'bracelets', name: 'Bracelets' },
    { id: 'sets', name: 'Bridal Sets' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Royal Kundan Necklace",
      category: "necklaces",
      price: "₹89,999",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&auto=format",
      description: "Exquisite kundan necklace with precious stones"
    },
    {
      id: 2,
      title: "Diamond Chandelier Earrings",
      category: "earrings",
      price: "₹45,999",
      image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53d32d?w=400&h=400&fit=crop&auto=format",
      description: "Elegant chandelier earrings with diamonds"
    },
    {
      id: 3,
      title: "Traditional Gold Bangles",
      category: "bracelets",
      price: "₹32,999",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&auto=format",
      description: "Classic gold bangles with intricate patterns"
    },
    {
      id: 4,
      title: "Emerald Ring Collection",
      category: "rings",
      price: "₹25,999",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&auto=format",
      description: "Stunning emerald rings in gold setting"
    },
    {
      id: 5,
      title: "Bridal Temple Set",
      category: "sets",
      price: "₹1,25,999",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&auto=format",
      description: "Complete bridal set with temple design"
    },
    {
      id: 6,
      title: "Pearl Drop Earrings",
      category: "earrings",
      price: "₹18,999",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&auto=format",
      description: "Elegant pearl earrings with gold accents"
    },
    {
      id: 7,
      title: "Antique Gold Chain",
      category: "necklaces",
      price: "₹55,999",
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&h=400&fit=crop&auto=format",
      description: "Vintage-style gold chain with pendant"
    },
    {
      id: 8,
      title: "Ruby Statement Ring",
      category: "rings",
      price: "₹42,999",
      image: "https://images.unsplash.com/photo-1596944924616-7b35e04f6833?w=400&h=400&fit=crop&auto=format",
      description: "Bold ruby ring with diamond accents"
    },
    {
      id: 9,
      title: "Gold Charm Bracelet",
      category: "bracelets",
      price: "₹28,999",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&auto=format",
      description: "Delicate charm bracelet in pure gold"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-gold-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our exquisite collection of 916 gold jewellery, each piece crafted with precision and passion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold-600 text-white shadow-lg'
                  : 'bg-gold-100 text-gold-700 hover:bg-gold-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gold-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gold-100 transition-colors duration-300">
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gold-100 transition-colors duration-300">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gold-100 transition-colors duration-300">
                      <ShoppingCart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gold-600">
                    {item.price}
                  </span>
                  <Button className="bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-full text-sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full text-lg font-medium">
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
