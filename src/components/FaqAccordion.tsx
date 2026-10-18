import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Que vais-je recevoir après mon achat ?',
      a: 'Vous recevrez un fichier PDF numérique contenant quatre patrons de décorations de Noël au crochet.',
    },
    {
      q: 'Les patrons sont-ils en français ?',
      a: 'Oui, les quatre patrons sont présentés en français.',
    },
    {
      q: 'Est-ce un produit physique ?',
      a: 'Non. Il s\'agit uniquement d\'un produit numérique. Les décorations terminées et le matériel ne sont pas inclus.',
    },
    {
      q: 'Comment accéder à mon PDF ?',
      a: 'Après confirmation de votre achat, vous pourrez accéder au téléchargement via le processus de livraison numérique de Payhip.',
    },
    {
      q: 'Puis-je imprimer les patrons ?',
      a: 'Oui, vous pouvez imprimer votre PDF pour votre usage personnel.',
    },
    {
      q: 'Quel matériel faut-il prévoir ?',
      a: 'Le matériel dépend du modèle choisi. Consultez la liste des fournitures dans le patron correspondant.',
    },
    {
      q: 'Ces modèles conviennent-ils aux débutants ?',
      a: 'Le niveau de difficulté peut varier selon les modèles. Consultez les instructions et les indications de chaque patron avant de commencer.',
    },
    {
      q: 'Puis-je obtenir de l\'aide si j\'ai une question ?',
      a: 'Vous pouvez nous contacter à l\'adresse indiquée dans la section contact.',
    },
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFF9F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
            Aide & Réponses
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252525]/75">
            Toutes les réponses à vos questions concernant la collection de patrons numériques.
          </p>
        </div>

        {/* Minimalist Accordion */}
        <div className="divide-y divide-[#355748]/15 border-y border-[#355748]/15">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#355748] rounded-md px-1"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#252525] group-hover:text-[#355748] transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'rotate-180 bg-[#355748] text-white'
                        : 'bg-[#355748]/10 text-[#355748] group-hover:bg-[#355748]/20'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="mt-3.5 pr-10 text-sm sm:text-base text-[#252525]/80 leading-relaxed animate-in fade-in duration-200"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
