'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hesarap3@gmail.com",
      link: "mailto:hesarap3@gmail.com.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 77 638 4916",
      link: "https://wa.me/94776384916"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/Hesara2003", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/hesaraperera/", label: "LinkedIn" },
    { icon: <Dribbble className="w-6 h-6" />, href: "#https://www.behance.net/hesaraperera", label: "Twitter" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/pages/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] 
          bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,#000_70%,transparent_110%)]" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
        />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <div className="h-full w-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 text-transparent bg-clip-text mb-6 animate-gradient">
                Let's Connect
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or just want to chat? I'd love to hear from you. 
                Let's create something extraordinary together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <form onSubmit={handleSubmit} className="relative space-y-6 backdrop-blur-sm bg-gray-900/90 p-8 rounded-lg border border-gray-700/50">
                  {(['name', 'email', 'subject'] as Array<keyof typeof formState>).map((field) => (
                    <div key={field} className="relative">
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formState[field]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        required
                      />
                      <label className={`absolute left-4 -top-2.5 px-2 text-sm transition-all duration-200 ${
                        focusedField === field || formState[field] ? 'text-purple-400 bg-gray-900' : 'text-gray-500'
                      }`}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                    </div>
                  ))}

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                      placeholder="Your Message"
                      rows={6}
                      required
                    />
                    <label className={`absolute left-4 -top-2.5 px-2 text-sm transition-all duration-200 ${
                      focusedField === 'message' || formState.message ? 'text-purple-400 bg-gray-900' : 'text-gray-500'
                    }`}>
                      Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg transition-all hover:scale-[1.02] disabled:opacity-75 disabled:hover:scale-100"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Message Sent!</span>
                        </>
                      ) : submitStatus === 'error' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Failed to send message. Please try again.</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>

              <div className="lg:pl-12">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative backdrop-blur-sm bg-gray-900/90 border border-gray-700/50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-6">
                      {contactInfo.map((info) => (
                        <a
                          key={info.title}
                          href={info.link}
                          className="flex items-start space-x-4 text-gray-300 hover:text-purple-400 transition-colors group"
                        >
                          <div className="text-purple-400 group-hover:scale-110 transition-transform">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-white font-medium mb-1">
                              {info.title}
                            </h3>
                            <p>{info.value}</p>
                          </div>
                        </a>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-700">
                      <h3 className="text-white font-medium mb-4">
                        Connect with me
                      </h3>
                      <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
                            aria-label={link.label}
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;