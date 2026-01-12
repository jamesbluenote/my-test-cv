
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Section from './components/Section.tsx';
import ExperienceList from './components/ExperienceList.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import { cvData } from './data.ts';
import { Award, Cpu, Globe, CheckCircle } from 'lucide-react';

export default function App() {
  if (!cvData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading CV data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Hero name={cvData.name} title={cvData.title} />

        <Section id="experience" title="Education & Experience">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Education Side */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-8 font-bold">Academic Journey</p>
              <div className="space-y-12">
                {cvData.education.map((edu, idx) => (
                  <div key={idx} className="border-l border-gray-200 pl-6 relative">
                    <div className="absolute -left-[4.5px] top-1 w-2 h-2 rounded-full bg-black" />
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">{edu.period}</span>
                    <h4 className="text-lg font-serif mb-1">{edu.degree}</h4>
                    <p className="text-sm text-gray-500">{edu.school}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gray-50 p-8 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold flex items-center gap-2">
                  <Award size={14} /> Awards & Honors
                </p>
                <ul className="space-y-4">
                  {cvData.awards.map((award, idx) => (
                    <li key={idx} className="text-sm font-medium text-gray-700 leading-snug">
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Experience Side */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-8 font-bold">Professional Path</p>
              <ExperienceList experiences={cvData.experiences} />
            </div>
          </div>
        </Section>

        <Section id="projects" title="Key Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {cvData.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Expertise & Skills">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="p-8 border border-gray-100 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
                <Globe size={20} />
              </div>
              <h4 className="font-serif text-xl mb-4">Languages</h4>
              <ul className="space-y-3">
                {cvData.skills.languages.map((l, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" /> {l}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-gray-100 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
                <Cpu size={20} />
              </div>
              <h4 className="font-serif text-xl mb-4">Development</h4>
              <ul className="space-y-3">
                {cvData.skills.programming.map((p, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" /> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-gray-100 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
                <CheckCircle size={20} />
              </div>
              <h4 className="font-serif text-xl mb-4">Qualifications</h4>
              <ul className="space-y-3">
                {cvData.skills.qualifications.map((q, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2 leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" /> {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl mb-12 text-center">Other Global Engagements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {cvData.otherExperiences.map((oe, idx) => (
                <div key={idx} className="relative group">
                   <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gray-100 group-hover:bg-black transition-colors" />
                   <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{oe.period}</p>
                   <h5 className="font-bold text-lg mb-2">{oe.title}</h5>
                   <p className="text-sm text-gray-500 mb-3">{oe.overview}</p>
                   <p className="text-[11px] font-semibold uppercase tracking-wider italic text-gray-400">{oe.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-20 border-t border-gray-100 text-center">
        <div className="mb-8">
          <h2 className="font-serif text-3xl mb-4">Professional CV</h2>
          <p className="text-gray-500 max-w-md mx-auto px-6">
            Bridging research innovation and technological commercialization through data-driven infrastructure.
          </p>
        </div>
        
        <div className="text-[10px] text-gray-300 tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} {cvData.name} — All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
