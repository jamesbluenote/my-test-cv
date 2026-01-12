
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase">
          <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
          <a href="#experience" className="hover:text-gray-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-gray-400 transition-colors">Skills</a>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold text-xs mb-1">S</div>
          <span className="text-[10px] font-bold tracking-widest uppercase">Sung Jun</span>
        </div>

        <div className="flex gap-5 text-gray-800">
          <Twitter size={18} className="cursor-pointer hover:text-gray-500" />
          <Linkedin size={18} className="cursor-pointer hover:text-gray-500" />
          <Github size={18} className="cursor-pointer hover:text-gray-500" />
        </div>
      </div>
    </nav>
  );
}
