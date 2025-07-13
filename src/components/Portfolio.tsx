import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'Semua', gradient: 'from-purple-500 to-pink-500' },
    { id: 'social', label: 'Social Media', gradient: 'from-blue-500 to-purple-500' },
    { id: 'product', label: 'Foto Produk', gradient: 'from-green-500 to-blue-500' },
    { id: 'video', label: 'Video Content', gradient: 'from-yellow-500 to-orange-500' },
    { id: 'ai', label: 'AI Generated', gradient: 'from-red-500 to-pink-500' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Kampanye Instagram - Kedai Kopi Lokal",
      category: "social",
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "image"
    },
    {
      id: 2,
      title: "Foto Produk - Fashion Brand",
      category: "product",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "image"
    },
    {
      id: 3,
      title: "Video Promosi - Restoran",
      category: "video",
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "video"
    },
    {
      id: 4,
      title: "AI Generated - Produk Kosmetik",
      category: "ai",
      image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "image"
    },
    {
      id: 5,
      title: "Konten Instagram Stories",
      category: "social",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "image"
    },
    {
      id: 6,
      title: "Foto Produk Makanan",
      category: "product",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "image"
    },
    {
      id: 7,
      title: "Reels Instagram - Tutorial",
      category: "video",
      image: "https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "video"
    },
    {
      id: 8,
      title: "AI Product Mockup",
      category: "ai",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=500",
      type: "image"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Portfolio{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Kami
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Lihat hasil karya terbaik kami yang telah membantu berbagai UMKM berkembang
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl`
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {item.type === 'video' ? (
                      <Play className="w-5 h-5 text-purple-400" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                    )}
                    <span className="text-sm text-white/80">
                      {item.type === 'video' ? 'Video' : 'Image'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Siap Bikin Konten{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Sekeren Ini?
                </span>
              </h3>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto font-light">
                Bergabunglah dengan puluhan UMKM yang sudah merasakan manfaatnya
              </p>
              <a
                href="https://wa.me/6281346781150"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                Mulai Sekarang
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;