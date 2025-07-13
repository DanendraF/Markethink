import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Sari Dewi",
      business: "Warung Kopi Sari",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Berkat Markethink, warung kopi saya jadi lebih dikenal. Konten Instagram-nya keren banget dan pelanggan makin banyak!",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Budi Santoso",
      business: "Toko Baju Online",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Foto produk AI-nya bagus banget! Hemat biaya tapi hasilnya professional. Penjualan naik 40% dalam 2 bulan.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Maya Sinta",
      business: "Catering Maya",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Tim Markethink sangat responsif dan kreatif. Strategi konten mereka bikin bisnis catering saya makin berkembang.",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kata{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Mereka
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Testimoni dari para klien yang telah merasakan manfaat layanan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-white/20 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-400/30 group-hover:text-purple-400/50 transition-colors duration-300" />
                  <p className="text-white/80 leading-relaxed italic pl-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                    />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur-sm`}></div>
                <div className="absolute inset-[1px] bg-gray-900/90 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;