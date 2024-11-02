import React from 'react';
import { Github, Mail, Linkedin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="absolute inset-0 animate-gradient opacity-30"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 max-w-3xl mx-auto relative z-10"
      >
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg blur-xl bg-gradient-to-r from-blue-600 to-emerald-600 opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <motion.h1 
            className="text-7xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Pranav Rajput
          </motion.h1>
        </div>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Building exceptional digital experiences with modern technologies.
          Focused on creating scalable and user-friendly applications.
        </motion.p>
        <motion.div 
          className="flex gap-4 justify-center pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com" className="hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
      <ChevronDown className="w-6 h-6 absolute bottom-8 animate-bounce z-10" />
    </header>
  );
};

export default Hero;