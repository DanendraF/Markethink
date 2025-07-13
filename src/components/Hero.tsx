import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Parallax Content */}
      <div 
        className="container mx-auto px-6 text-center relative z-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-white/80 text-sm font-medium">AI-Powered Digital Marketing</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-tight">
            Bikin Bisnismu{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              Makin Ngetop
            </span>
            <br />
            <span className="text-3xl md:text-5xl font-light text-white/60">
              Tanpa Bikin Dompet Tipis
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Markethink bantu UMKM tampil lebih profesional di dunia digital. 
            Konten keren, strategi cerdas, harga tetap bersahabat.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-purple-500/25"
            >
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <a
              href="https://wa.me/6281346781150"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/20 text-white hover:bg-white hover:text-black px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 flex items-center gap-3 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Chat WhatsApp
            </a>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[
              { number: '100+', label: 'UMKM Terbantu' },
              { number: '500+', label: 'Konten Diproduksi' },
              { number: '24/7', label: 'Support AI' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/60 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      />
    </section>
  );
};

export default Hero;