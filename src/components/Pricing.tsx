import React, { useRef, useEffect, useState } from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
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

  const plans = [
    {
      name: "Basic",
      price: "750.000",
      period: "/bulan",
      icon: <Star className="w-6 h-6" />,
      popular: false,
      gradient: "from-blue-500 to-purple-500",
      features: [
        "10 konten feed Instagram",
        "5 Instagram Stories",
        "Caption kreatif",
        "Hashtag research",
        "Posting schedule",
        "Monthly report"
      ]
    },
    {
      name: "Pro",
      price: "1.500.000",
      period: "/bulan",
      icon: <Crown className="w-6 h-6" />,
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "20 konten feed Instagram",
        "15 Instagram Stories",
        "5 video reels",
        "Foto produk (10 item)",
        "AI-generated content",
        "Strategi konten",
        "Community management",
        "Weekly report",
        "WhatsApp support"
      ]
    },
    {
      name: "Ultimate",
      price: "2.500.000",
      period: "/bulan",
      icon: <Zap className="w-6 h-6" />,
      popular: false,
      gradient: "from-yellow-500 to-red-500",
      features: [
        "Unlimited konten feed",
        "Unlimited stories",
        "15 video reels",
        "Foto produk unlimited",
        "AI Agent & Chatbot",
        "Multi-platform management",
        "Advanced analytics",
        "Priority support",
        "Monthly consultation",
        "Custom campaign"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="pricing" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Paket{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Harga
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk konsultasi gratis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 hover:scale-105 ${
                plan.popular ? 'scale-105 z-10' : ''
              } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Paling Populer
                  </div>
                </div>
              )}

              <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-white/20 ${
                plan.popular ? 'border-white/30' : ''
              }`}>
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {plan.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-white/60">Rp</span>
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-sm text-white/60">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 group/feature">
                        <div className={`w-6 h-6 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform duration-300`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white/80 text-sm group-hover/feature:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-2xl hover:shadow-purple-500/25`
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40'
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-sm`}></div>
                  <div className="absolute inset-[1px] bg-gray-900/90 rounded-3xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-12 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Masih Bingung{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Pilih Paket?
                </span>
              </h3>
              <p className="text-white/70 mb-8 text-lg font-light">
                Konsultasi gratis dengan tim kami untuk mendapatkan rekomendasi paket yang tepat untuk bisnis Anda
              </p>
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;