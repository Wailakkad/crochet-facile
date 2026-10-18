import React from 'react';
import { ShoppingBag, Download, Scissors } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: ShoppingBag,
      title: 'Choisissez votre kit',
      text: 'Accédez à la collection de quatre patrons de Noël.',
    },
    {
      number: '2',
      icon: Download,
      title: 'Téléchargez le PDF',
      text: 'Après votre achat, récupérez votre fichier numérique.',
    },
    {
      number: '3',
      icon: Scissors,
      title: 'Commencez à crocheter',
      text: 'Préparez votre matériel et réalisez vos décorations à votre rythme.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
            Simplicité & Rapidité
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Comment ça fonctionne ?
          </h2>
        </div>

        {/* 3 Steps Timeline */}
        <div className="relative">
          {/* Subtle connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-[#355748]/15 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-[#F7F3ED] rounded-2xl p-8 border border-[#355748]/10 text-center flex flex-col items-center shadow-[0_4px_20px_-6px_rgba(53,87,72,0.05)] hover:shadow-md transition-shadow"
                >
                  {/* Step Icon Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#355748] text-[#FFF9F2] flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#D8B876] text-[#252525] text-xs font-bold flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#252525] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed max-w-xs">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
