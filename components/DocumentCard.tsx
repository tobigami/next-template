'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface DocumentCardProps {
  type: string;
  name: string;
  img: string;
  url: string;
}

export function DocumentCard({ type, name, img, url }: DocumentCardProps) {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <div className='relative w-full' style={{ paddingTop: '141.4%' }}>
        <Image
          src={img}
          alt={name}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='p-2'>
        <span className='inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded mb-4'>
          {type}
        </span>
        <h3 className='text-xl font-semibold mb-4 line-clamp-2'>{name}</h3>
        {url && (
          <Button variant='outline' className='' onClick={() => window.open(url, '_blank')}>
            Xem tài liệu
          </Button>
        )}
      </div>
    </div>
  );
}
