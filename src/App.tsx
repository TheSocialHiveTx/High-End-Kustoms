/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Car, 
  Shield, 
  Sparkles, 
  Waves, 
  Truck, 
  Wind, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  Clock,
  Menu,
  X,
  Instagram,
  Facebook
} from 'lucide-react';

// Color Palette Constants
const COLORS = {
  purple: {
    primary: '#7E22CE', // purple-700
    dark: '#581C87',    // purple-900
    light: '#A855F7',   // purple-500
  },
  silver: {
    primary: '#E5E7EB', // gray-200
    muted: '#9CA3AF',   // gray-400
  }
};

const services = [
  {
    id: 'pw-res',
    title: 'Commercial & Residential Pressure Washing',
    description: 'Professional exterior cleaning for building, driveways, and sidewalks.',
    icon: <Waves className="w-6 h-6" />,
  },
  {
    id: 'detailing',
    title: 'Auto, Marine & RV Detailing',
    description: 'High-end interior and exterior detailing for all your premium vehicles.',
    icon: <Car className="w-6 h-6" />,
  },
  {
    id: 'paint',
    title: 'Paint Correction',
    description: 'Restoring your vehicle\'s finish to a mirror-like shine by removing imperfections.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coatings',
    description: 'Long-term protection that enhances gloss and repels water/dirt.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: 'fleet',
    title: 'Fleet Washing',
    description: 'Reliable scheduled cleaning to keep your business fleet looking professional.',
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: 'offroad',
    title: 'Off Road Detailing',
    description: 'Specialized cleaning for ATVs, UTVs, and 4x4s to handle the toughest dirt.',
    icon: <Wind className="w-6 h-6" />,
  },
  {
    id: 'polishing',
    title: 'Aluminum & Stainless Polishing',
    description: 'Restoring the luster to your metal surfaces with precision techniques.',
    icon: <Droplets className="w-6 h-6" />,
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-purple-500/30">
      {/* Background Bubbles Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[150px]" />
        
        {/* Animated small drops/bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 border border-white/10"
            initial={{ 
              width: Math.random() * 80 + 20, 
              height: Math.random() * 80 + 20,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{ 
              y: [null, "-=100px", "+=50px"],
              opacity: [0, 0.4, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-purple-900/30 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-2 rounded-lg shadow-[0_0_15px_rgba(126,34,206,0.5)]">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">
              High End <span className="text-purple-500 underline decoration-purple-500/50 underline-offset-4">Kustoms</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-purple-400 transition-colors uppercase tracking-widest">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-purple-400 transition-colors uppercase tracking-widest">About</a>
            <a href="#quote" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_10px_rgba(126,34,206,0.3)] uppercase tracking-widest leading-none">
              Get A Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-[#0F0F0F] border-b border-purple-900/50 z-40 md:hidden p-6 flex flex-col gap-6 shadow-2xl"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">About</a>
            <a href="#quote" onClick={() => setIsMenuOpen(false)} className="bg-purple-600 p-4 rounded-xl text-center font-black uppercase italic tracking-wider">Get A Quote</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-[1px] w-12 bg-purple-500/50" />
              <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.3em] italic">Established & Elite</span>
              <span className="h-[1px] w-12 bg-purple-500/50" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none italic uppercase">
              Defined by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600 drop-shadow-[0_5px_15px_rgba(168,85,247,0.4)]">
                Detail.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Premium pressure washing and detailing services. We bring showroom quality to your doorstep with precision and passion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#quote"
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-black uppercase italic tracking-2 shadow-[0_20px_40px_rgba(126,34,206,0.3)] transition-all flex items-center justify-center gap-2"
              >
                Book Your Quote <ChevronRight className="w-5 h-5" />
              </motion.a>
              <a 
                href="tel:8324441900"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-purple-400" /> 832-444-1900
              </a>
            </div>

            {/* Badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="flex items-center gap-2">
                 <Shield className="w-5 h-5 text-purple-400" />
                 <span className="text-xs uppercase tracking-widest font-bold">Fully Insured</span>
               </div>
               <div className="flex items-center gap-2">
                 <Clock className="w-5 h-5 text-purple-400" />
                 <span className="text-xs uppercase tracking-widest font-bold">Premium Materials</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5 text-purple-400" />
                 <span className="text-xs uppercase tracking-widest font-bold">Detail Guaranteed</span>
               </div>
            </div>
          </motion.div>
          
          {/* Scroll Down */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto" />
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-purple-500 uppercase tracking-[0.4em] mb-4">Elite Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight">Our Services</h3>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">From residential driveways to luxury RVs, we provide the ultimate level of clean.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-purple-900/10 hover:border-purple-500/30 transition-all duration-500 cursor-default"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-purple-900/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 italic uppercase group-hover:text-purple-300 transition-colors">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-4 h-4 text-purple-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action / Lead Form */}
        <section id="quote" className="py-24 px-6 bg-[#0D0D0D] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.1),transparent_70%)]" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase leading-none">
                Ready for the <br />
                <span className="text-purple-500">Elite Shine?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">
                Contact us today for a personalized quote. Our specialist will review your requirements and provide a detailed estimate.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Call or Text</p>
                    <a href="tel:8324441900" className="text-xl font-bold hover:text-purple-400 transition-colors">832-444-1900</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Us</p>
                    <a href="mailto:highendkustomstx@gmail.com" className="text-xl font-bold hover:text-purple-400 transition-colors shrink-0 overflow-hidden text-ellipsis block max-w-[280px]">highendkustomstx@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl backdrop-blur-sm"
            >
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="(123) 456-7890"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Service Needed</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-slate-400 appearance-none">
                      <option className="bg-[#0A0A0A]">Pressure Washing</option>
                      <option className="bg-[#0A0A0A]">Full Detailing</option>
                      <option className="bg-[#0A0A0A]">Ceramic Coating</option>
                      <option className="bg-[#0A0A0A]">Paint Correction</option>
                      <option className="bg-[#0A0A0A]">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Your Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all placeholder:text-slate-600 resize-none"
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-purple-600 py-5 rounded-2xl font-black uppercase italic tracking-widest shadow-xl shadow-purple-900/20"
                  >
                    Send Request
                  </motion.button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 uppercase italic">Quote Request Sent!</h3>
                  <p className="text-slate-400 mb-8 max-w-xs mx-auto">Thank you for choosing High End Kustoms. Our team will contact you shortly.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-purple-400 font-bold uppercase tracking-widest text-sm hover:text-purple-300"
                  >
                    Send Another message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-lg font-black tracking-tighter uppercase italic">
              High End <span className="text-purple-500">Kustoms</span>
            </span>
          </div>

          <div className="flex gap-10">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>

          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} High End Kustoms. All rights reserved. <br className="md:hidden" />
            <span className="ml-0 md:ml-4 text-purple-500/50">Defined by Detail.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
