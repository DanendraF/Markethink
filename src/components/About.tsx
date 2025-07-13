import React, { useRef, useEffect, useState } from 'react';
import { Shield, Lightbulb, Rocket, Heart } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Terpercaya & Profesional",
      description: "Lebih dari 100 UMKM telah mempercayai kami untuk mengembangkan bisnis mereka di dunia digital.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Inovasi AI Terdepan",
      description: "Memanfaatkan teknologi AI untuk menghemat waktu dan biaya, sambil tetap menjaga kualitas konten yang tinggi.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Hasil Cepat & Efektif",
      description: "Strategi yang terbukti memberikan hasil nyata dalam waktu singkat, sesuai dengan kebutuhan bisnis Anda.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pendampingan Personal",
      description: "Tim kreatif kami siap mendampingi Anda dari A sampai Z, memastikan setiap kebutuhan bisnis terpenuhi.",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Tentang{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Markethink
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed font-light max-w-4xl mx-auto">
            Markethink hadir supaya UMKM nggak kalah bersaing di dunia digital. 
            Kami percaya semua bisnis pantas punya konten keren dan strategi marketing yang tepat — tanpa harus mahal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-10 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Komitmen Kami
                </h3>
                <div className="space-y-6">
                  {[
                    "Memberikan solusi terbaik untuk setiap UMKM",
                    "Mengutamakan kualitas dan kepuasan klien",
                    "Terus berinovasi dengan teknologi terbaru",
                    "Harga yang transparan dan terjangkau"
                  ].map((commitment, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                        {commitment}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;