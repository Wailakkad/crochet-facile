import React from 'react';
import { BookOpen, Languages, FileText, Download } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: '4 patrons réunis',
      description: 'Quatre projets de Noël dans une seule collection.',
    },
    {
      icon: Languages,
      title: '100 % en français',
      description: 'Des instructions rédigées en français pour suivre vos projets crochet.',
    },
    {
      icon: FileText,
      title: 'Guide PDF',
      description: 'Un format pratique à consulter sur votre appareil ou à imprimer.',
    },
    {
      icon: Download,
      title: 'Accès après achat',
      description: 'Récupérez votre fichier numérique après confirmation de votre commande.',
    },
  ];

  return (
    <section id="pourquoi-ce-kit" className="py-20 sm:py-24 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Pourquoi choisir <span className="text-[#355748] underline decoration-[#91B5A3]/50 decoration-wavy decoration-1 underline-offset-8">ce kit</span> ?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252525]/70 max-w-lg mx-auto">
            Une collection numérique pensée pour vous accompagner pas à pas dans vos créations festives.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F3ED] rounded-2xl p-7 sm:p-8 border border-[#355748]/10 shadow-[0_4px_20px_-4px_rgba(53,87,72,0.05)] hover:shadow-[0_8px_30px_-6px_rgba(53,87,72,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#355748]/10 text-[#355748] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#252525] mb-3 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-[#252525]/75 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
