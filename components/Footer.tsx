import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Add social links data
  const socialLinks = [
    { icon: Github, name: 'github', href: 'https://github.com/Hesara2003' },
    { icon: Linkedin, name: 'linkedin', href: 'https://www.linkedin.com/in/hesaraperera/' },
    { icon: Dribbble, name: 'instagram', href: 'https://www.behance.net/hesaraperera?' }
  ];

  // Animated link component
  const AnimatedLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="text-sm hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
    >
      {children}
    </a>
  );

  // Update SocialIcon component
  const SocialIcon = ({ icon: Icon, name, href }: { icon: React.ComponentType; name: string; href: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 
        transition-colors duration-200"
    >
      <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
    </motion.a>
  );

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4 transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-white text-lg font-semibold">Hesara Perera</h3>
            <p className="text-sm">Creating amazing experiences through innovative technology solutions.</p>
            <div className="flex items-center space-x-2 group">
              <Mail size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              <span className="text-sm group-hover:text-white transition-colors duration-300">hesarap3@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Phone size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              <span className="text-sm group-hover:text-white transition-colors duration-300">+94 77 638 4916</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><AnimatedLink href="/about">About</AnimatedLink></li>
              <li><AnimatedLink href="/projects">Projects</AnimatedLink></li>
              <li><AnimatedLink href="/awards">Awards</AnimatedLink></li>
              <li><AnimatedLink href="/contact">Contact</AnimatedLink></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-white text-lg font-semibold">Connect With Us</h3>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <SocialIcon 
                  key={social.name}
                  icon={social.icon} 
                  name={social.name}
                  href={social.href}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              &copy; {currentYear} Hesara Perera. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <AnimatedLink href="#">Privacy Policy</AnimatedLink>
              <AnimatedLink href="#">Terms of Service</AnimatedLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;