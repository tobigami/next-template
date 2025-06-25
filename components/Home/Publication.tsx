'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const data = {
  name: 'Xu hướng Truyền hình Đa nền tảng ở Việt Nam hiện nay',
  img: '/images/slides/publication.png',
  des: 'Cuốn sách chuyên khảo trình bày kết quả nghiên cứu sâu sắc và thực tiễn về sự chuyển dịch của truyền hình truyền thống sang hệ sinh thái đa nền tảng.',
  linkBuy: 'https://a.co/d/akw9IeS'
};

export default function Publications() {
  const router = useRouter();

  const handleViewDetail = () => {
    router.push('/books');
  };

  const handleBuyBook = () => {
    window.open(data.linkBuy, '_blank');
  };

  return (
    <div>
      <div>
        <h2 className='text-3xl font-bold mb-8 text-center'>Ấn phẩm</h2>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='w-full md:w-1/2 max-w-[800px] rounded-md'>
            <Image
              src={data.img}
              alt={data.name}
              width={500}
              height={650}
              priority
              className='w-full h-auto drop-shadow-xl rounded-md'
              style={{
                filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.15)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'
              }}
            />
          </div>
          <div className='w-full md:flex-1 space-y-4'>
            <h3 className='text-2xl font-semibold'>{data.name}</h3>
            <p className='text-gray-600 text-lg'>{data.des}</p>
            <div className='flex gap-4 pt-4'>
              <Button onClick={handleViewDetail} variant='outline' className='cursor-pointer'>
                Xem chi tiết
              </Button>
              <Button onClick={handleBuyBook} className='cursor-pointer'>
                Mua sách
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
