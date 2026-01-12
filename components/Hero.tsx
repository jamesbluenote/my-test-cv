
import React from 'react';

export default function Hero({ name, title }: { name: string; title: string }) {
  return (
    <section id="home" className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
      <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
        {name} <br />
        <span className="italic opacity-80">{title.split('&')[0]}</span>
        <br />
        <span className="text-4xl md:text-5xl font-light">& {title.split('&')[1]}</span>
      </h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16 text-left">
        <div className="max-w-xs">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Biography</p>
          <p className="text-sm leading-relaxed text-gray-600">
            Dedicated researcher at IBS with deep expertise in GPU infrastructure and 
            bio-data systems. Bridging the gap between cutting-edge technology and 
            practical commercialization.
          </p>
        </div>
        
        <div className="relative w-64 h-80 rounded-full overflow-hidden border-[12px] border-white shadow-xl">
          <img 
            src="https://picsum.photos/seed/sungjun/400/500" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-xs space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Location</p>
            <p className="text-sm font-medium">Daejeon, South Korea</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Current Role</p>
            <p className="text-sm font-medium leading-snug">Research & Engineering Staff at Institute for Basic Science (IBS)</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center gap-16 border-t border-gray-100 pt-12">
        <div className="text-center">
          <span className="block text-4xl font-serif mb-1">14</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Years Experience</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-serif mb-1">10+</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Major Projects</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-serif mb-1">3</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Global Partners</span>
        </div>
      </div>
    </section>
  );
}
