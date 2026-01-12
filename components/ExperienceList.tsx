
import React from 'react';
import { Experience } from '../types.ts';

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="space-y-16 max-w-4xl mx-auto">
      {experiences.map((exp, idx) => (
        <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 mt-1">
            {exp.period}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
            <p className="text-gray-500 text-sm mb-4 italic">{exp.company}, {exp.location}</p>
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, rIdx) => (
                <li key={rIdx} className="text-gray-600 text-sm flex gap-3">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
