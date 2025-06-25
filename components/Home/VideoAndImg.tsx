'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

export default function VideoAndImg() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const videoUrl = 'https://www.youtube.com/watch?v=fgDlNs2Ekns&t=12s';
  const videoId = videoUrl.split('v=')[1].split('&')[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const images = Array.from({ length: 9 }, (_, i) => ({
    src: `/images/per/${i + 1}.jpg`,
    alt: `Author image ${i + 1}`
  }));

  return (
    <section>
      <h2 className='text-3xl font-bold text-center mb-8'>Videos & Hình ảnh</h2>

      <div className='flex flex-col items-start justify-between gap-8'>
        {/* Video Section */}
        <div className='w-full'>
          <div className='rounded-lg overflow-hidden shadow-xl aspect-video'>
            <iframe
              src={embedUrl}
              title='YouTube video'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='w-full h-full'
            />
          </div>
        </div>

        {/* Image Gallery Section */}
        <div>
          <div className='grid grid-cols-3 sm:grid-cols-5 gap-3'>
            {images.map((image, index) => (
              <div
                key={index}
                className='relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity'
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className='object-cover w-full h-full'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox open={isOpen} close={() => setIsOpen(false)} index={currentImageIndex} slides={images} />
    </section>
  );
}
