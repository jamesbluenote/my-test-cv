
import React from 'react';
import { Project } from '../types.ts';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group cursor-default">
      <div className="aspect-[4/5] bg-gray-50 mb-6 overflow-hidden relative">
        <img 
          src={`https://picsum.photos/seed/${project.title}/800/1000`} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{project.client} • {project.period}</p>
        <h3 className="text-xl font-serif mb-3 group-hover:underline transition-all underline-offset-4">{project.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{project.overview}</p>
        <p className="mt-4 text-[11px] font-bold text-gray-900 flex items-center gap-2">
          {project.role.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
