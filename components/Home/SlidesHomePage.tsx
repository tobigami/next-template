'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem as CarouselComponent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface ProfileCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export default function ProfileCarousel({ items, className = '' }: ProfileCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayRef = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: false // Tắt stopOnMouseEnter mặc định
    })
  );

  // Xử lý autoplay
  const handleMouseEnter = React.useCallback(() => {
    const autoplay = autoplayRef.current;
    if (autoplay) {
      autoplay.stop();
    }
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    const autoplay = autoplayRef.current;
    if (autoplay) {
      autoplay.play();
    }
  }, []);

  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  if (!items || items.length === 0) {
    return <div className='text-center p-8'>Không có dữ liệu để hiển thị</div>;
  }

  return (
    <div
      className={`relative w-full bg-white ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel */}
      <Carousel
        className='w-full'
        opts={{
          loop: true
        }}
        setApi={setApi}
        plugins={[autoplayRef.current]}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselComponent key={item.id}>
              <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[600px]'>
                {/* Left Content */}
                <div className='flex flex-col justify-center px-4 lg:px-12 py-8 lg:py-12'>
                  <div className='max-w-lg'>
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4 lg:mb-6'>{item.title}</h2>
                    <p className='text-primary text-sm font-medium mb-4 lg:mb-6 leading-relaxed'>{item.subtitle}</p>
                    <p className='mb-6 lg:mb-8 text-sm lg:text-base'>{item.description}</p>
                  </div>
                </div>

                {/* Right Image */}
                <div className='relative w-full h-[300px] lg:h-full rounded-md overflow-hidden'>
                  <Image src={item.image} alt={item.imageAlt} fill className='object-cover rounded-md' priority />
                </div>
              </div>
            </CarouselComponent>
          ))}
        </CarouselContent>

        {/* Navigation Buttons - Hidden on mobile */}
        <div className='hidden md:block absolute top-1/2 left-12 -translate-y-1/2'>
          <CarouselPrevious className='h-8 w-8 opacity-70 hover:opacity-100 hover:bg-primary hover:text-white transition-all duration-200' />
        </div>
        <div className='hidden md:block absolute top-1/2 right-12 -translate-y-1/2'>
          <CarouselNext className='h-8 w-8 opacity-70 hover:opacity-100 hover:bg-primary hover:text-white transition-all duration-200' />
        </div>

        {/* Dots Indicator */}
        <div className='absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2'>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-4 bg-primary' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
