import React, { useState, useRef, useEffect } from 'react';
import { Camera, Target, Users, Zap, Bot, Sparkles } from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Produksi Konten",
      description: "Dari foto, video, sampai caption yang bikin jualanmu makin dilirik.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategi Konten",
      description: "Biar nggak asal posting. Susun langkah cerdas biar kontenmu tepat sasaran.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manajemen Sosial Media",
      description: "Urus bisnis tenang, akun sosial mediamu kami pegang.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Foto Produk (Real & AI)",
      description: "Foto produk aesthetic, bisa real atau AI-generated, hemat biaya tanpa ngurangin kualitas.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Agent untuk Bisnis",
      description: "Chatbot, auto-reply WhatsApp, dan analisis data. Biar kerja makin cepat, hasil makin tepat.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimasi Digital",
      description: "Maksimalkan performa online dengan strategi yang terbukti efektif.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-white/80 text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Layanan{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Kami
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Solusi lengkap untuk kebutuhan digital marketing UMKM dengan teknologi terdepan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-sm`}></div>
                <div className="absolute inset-[1px] bg-gray-900/90 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-32 relative">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Mengapa{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Markethink?
                </span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Harga bersahabat untuk UMKM",
                "Konten profesional yang bikin bisnis makin dipercaya",
                "Lebih cepat berkat teknologi AI",
                "Tim kreatif siap bantu dari A sampai Z"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white/80 text-lg group-hover:text-white transition-colors duration-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;