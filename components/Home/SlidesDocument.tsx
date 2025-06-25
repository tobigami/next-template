'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { dataDocuments } from '@/constant/documents';
import Image from 'next/image';

export default function SlidesDocument() {
  return (
    <div className='w-full relative'>
      <h3 className='text-center font-bold text-3xl pb-4'>Tài liệu</h3>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        className='w-full'
      >
        <CarouselContent>
          {dataDocuments.map((item, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <div className='overflow-hidden rounded-lg relative' style={{ aspectRatio: '1/1.414' }}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover transition-all hover:scale-105'
                    priority={index < 2}
                  />
                </div>
                <div className='mt-3 h-[80px]'>
                  <p className='text-sm font-medium text-primary line-clamp-1 h-5'>{item.type}</p>
                  <h3 className='mt-2 line-clamp-2 text-base font-semibold'>{item.name}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='hidden md:block absolute left-8 top-1/2'>
          <CarouselPrevious className='hover:bg-primary hover:text-primary-foreground' />
        </div>
        <div className='hidden md:block absolute right-8 top-1/2'>
          <CarouselNext className='hover:bg-primary hover:text-primary-foreground' />
        </div>
      </Carousel>
    </div>
  );
}
