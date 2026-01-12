
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 max-w-7xl mx-auto border-t border-gray-100 ${className}`}>
      <h2 className="font-serif text-4xl mb-16 text-center">{title}</h2>
      {children}
    </section>
  );
}
