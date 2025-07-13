import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
              Markethink
            </div>
            <p className="text-white/70 mb-8 max-w-md text-lg font-light leading-relaxed">
              Membantu UMKM tampil lebih profesional di dunia digital dengan konten keren, 
              strategi cerdas, dan harga yang bersahabat.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, gradient: "from-pink-500 to-purple-500" },
                { icon: <Facebook className="w-5 h-5" />, gradient: "from-blue-500 to-purple-500" },
                { icon: <Twitter className="w-5 h-5" />, gradient: "from-blue-400 to-blue-600" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/25`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Menu</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  +62 813-4678-1150
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  markethiinkk@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/50">
            © 2024 Markethink. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;