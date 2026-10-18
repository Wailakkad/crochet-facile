import React from 'react';

export const EditorialGallery: React.FC = () => {
  const photos = [
    {
      image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/Ambiance_Salon.jpg',
      caption: 'Le sapin de Noël au crochet au cœur d’une ambiance hivernale chaleureuse.',
      alt: 'Sapin de Noël au crochet dans un intérieur parisien chaleureux',
      tag: 'Ambiance Salon',
    },
    {
      image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/Ornements_Festifs.jpg',
      caption: 'Les clochettes colorées suspendues en ornements délicats sur les branches de sapin.',
      alt: 'Clochettes de Noël au crochet suspendues aux branches de sapin',
      tag: 'Ornements Festifs',
    },
    {
      image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/D%C3%A9coration_Murale.jpg',
      caption: 'La guirlande de sapins déployée le long d’une étagère en bois et bougies festives.',
      alt: 'Guirlande de sapins au crochet sur manteau de cheminée',
      tag: 'Décoration Murale',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Imaginez votre Noël fait main...
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
            Des créations pleines de charme pour personnaliser vos fêtes.
          </p>
        </div>

        {/* 3 Columns Desktop / Responsive Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-[#F7F3ED] border border-[#355748]/10 shadow-[0_4px_24px_-4px_rgba(53,87,72,0.06)] flex flex-col"
            >
              <div className="relative w-full overflow-hidden bg-[#2D4539]/5 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#FFF9F2]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase text-[#355748]">
                  {item.tag}
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-grow flex items-center">
                <p className="font-serif italic text-base sm:text-lg text-[#252525]/85 leading-snug">
                  « {item.caption} »
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
