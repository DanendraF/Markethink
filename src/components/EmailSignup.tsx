import React from 'react';
import { Mail, Users, Sparkles } from 'lucide-react';

const EmailSignup = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-white/80 text-sm font-medium">Join Our Community</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bergabung dengan{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Waiting List
              </span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed font-light max-w-3xl mx-auto">
              Dapatkan update terbaru tentang layanan premium kami, tips digital marketing eksklusif, 
              dan penawaran khusus untuk UMKM yang bergabung lebih dulu.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Tips Eksklusif", desc: "Strategi marketing terbaru langsung ke email Anda" },
              { icon: <Users className="w-6 h-6" />, title: "Akses Prioritas", desc: "Dapatkan layanan premium lebih dulu dari yang lain" },
              { icon: <Sparkles className="w-6 h-6" />, title: "Diskon Khusus", desc: "Penawaran spesial untuk member waiting list" }
            ].map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mailchimp Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:border-white/20 transition-all duration-500">
            <div id="mc_embed_shell">
              <div id="mc_embed_signup">
                <form 
                  action="https://gmail.us3.list-manage.com/subscribe/post?u=1b5630fad7877cc7d75a959ff&amp;id=28685561ba&amp;f_id=008dc4e0f0" 
                  method="post" 
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form" 
                  className="validate" 
                  target="_blank"
                >
                  <div id="mc_embed_signup_scroll">
                    <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Daftar Sekarang
                    </h3>
                    
                    <div className="max-w-md mx-auto">
                      <div className="mc-field-group mb-6">
                        <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-white/80 mb-3">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="EMAIL" 
                          className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-white/40 hover:bg-white/10" 
                          id="mce-EMAIL" 
                          required 
                          placeholder="masukkan@email.anda"
                        />
                      </div>
                      
                      <div id="mce-responses" className="clear foot">
                        <div className="response text-red-400 text-sm mb-4" id="mce-error-response" style={{display: 'none'}}></div>
                        <div className="response text-green-400 text-sm mb-4" id="mce-success-response" style={{display: 'none'}}></div>
                      </div>
                      
                      {/* Honeypot */}
                      <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                        <input type="text" name="b_1b5630fad7877cc7d75a959ff_28685561ba" tabIndex={-1} />
                      </div>
                      
                      <div className="optionalParent">
                        <div className="clear foot">
                          <button
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 mb-6"
                          >
                            Bergabung Sekarang
                          </button>
                          
                          <p className="text-white/40 text-xs">
                            Powered by{' '}
                            <a 
                              href="http://eepurl.com/ji86JM" 
                              title="Mailchimp - email marketing made easy and fun"
                              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                            >
                              Mailchimp
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              🔒 Email Anda aman bersama kami. Tidak ada spam, hanya konten berkualitas.
            </p>
          </div>
        </div>
      </div>

      {/* Mailchimp Scripts */}
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function($) {
              window.fnames = new Array(); 
              window.ftypes = new Array();
              fnames[0]='EMAIL';ftypes[0]='email';
              fnames[1]='FNAME';ftypes[1]='text';
              fnames[2]='LNAME';ftypes[2]='text';
              fnames[3]='ADDRESS';ftypes[3]='address';
              fnames[4]='PHONE';ftypes[4]='phone';
              fnames[5]='BIRTHDAY';ftypes[5]='birthday';
              fnames[6]='COMPANY';ftypes[6]='text';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `
        }}
      />
    </section>
  );
};

export default EmailSignup;