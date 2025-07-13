import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    namaUsaha: '',
    nomorWhatsApp: '',
    pesan: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent('Permintaan Konsultasi Gratis dari Markethink');
    const emailBody = encodeURIComponent(`
Nama: ${formData.nama}
Nama Usaha: ${formData.namaUsaha}
Nomor WhatsApp: ${formData.nomorWhatsApp}
Pesan: ${formData.pesan}
    `);
    
    // Open email client
    window.open(`mailto:markethiinkk@gmail.com?subject=${emailSubject}&body=${emailBody}`);
    
    // Reset form
    setFormData({
      nama: '',
      namaUsaha: '',
      nomorWhatsApp: '',
      pesan: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Konsultasi{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gratis
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Mau bisnis makin dikenal di dunia digital? Konsultasi GRATIS sekarang bareng Markethink!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/20 rounded-3xl p-10 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Mari Berdiskusi!
                  </h3>
                  <p className="text-white/80 mb-10 text-lg font-light">
                    Tim kami siap membantu Anda menemukan solusi terbaik untuk mengembangkan bisnis di era digital.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      { icon: <MessageCircle className="w-6 h-6" />, title: "WhatsApp", info: "+62 813-4678-1150", gradient: "from-green-500 to-emerald-500" },
                      { icon: <Mail className="w-6 h-6" />, title: "Email", info: "muhammadirfazitny@gmail.com", gradient: "from-blue-500 to-purple-500" },
                      { icon: <Phone className="w-6 h-6" />, title: "Response Time", info: "< 2 jam (jam kerja)", gradient: "from-yellow-500 to-orange-500" }
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center gap-6 group">
                        <div className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                            {contact.title}
                          </p>
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                            {contact.info}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="https://wa.me/6281346781150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-5 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Chat WhatsApp
                </a>
                
                <a
                  href="mailto:muhammadirfazitny@gmail.com"
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-5 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Kirim Email
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Isi Form Konsultasi
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {[
                    { name: 'nama', label: 'Nama Lengkap', type: 'text', placeholder: 'Masukkan nama lengkap' },
                    { name: 'namaUsaha', label: 'Nama Usaha', type: 'text', placeholder: 'Masukkan nama usaha' },
                    { name: 'nomorWhatsApp', label: 'Nomor WhatsApp', type: 'tel', placeholder: 'Contoh: 08123456789' }
                  ].map((field, index) => (
                    <div key={field.name} className="group">
                      <label className="block text-sm font-medium text-white/80 mb-3 group-focus-within:text-white transition-colors duration-300">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-white/40 hover:bg-white/10"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div className="group">
                    <label className="block text-sm font-medium text-white/80 mb-3 group-focus-within:text-white transition-colors duration-300">
                      Pesan
                    </label>
                    <textarea
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-white/40 resize-none hover:bg-white/10"
                      placeholder="Ceritakan tentang bisnis Anda dan bagaimana kami bisa membantu..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-5 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/25"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;