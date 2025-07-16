import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import EmailSignup from './components/EmailSignup';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function ClarityScript() {
  React.useEffect(() => {
    if (document.getElementById('clarity-script')) return;
    const script = document.createElement('script');
    script.id = 'clarity-script';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "sfktm2g6ky");
    `;
    document.body.appendChild(script);
  }, []);
  return null;
}

function App() {
  return (
    <div className="min-h-screen">
      <ClarityScript />
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <EmailSignup />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;