'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function Books() {
  const bookInfo = {
    title: 'XU HƯỚNG TRUYỀN HÌNH ĐA NỀN TẢNG Ở VIỆT NAM HIỆN NAY',
    subtitle: '(Vietnamese Edition)',
    details: [
      {
        label: 'Xuất bản tại Việt Nam',
        value: 'Nhà Xuất Bản Chính trị Quốc Gia Sự Thật (2025)'
      },
      {
        label: 'Ngôn ngữ',
        value: 'Tiếng Việt'
      },
      {
        label: 'Xuất bản toàn cầu',
        value:
          'Amazon & phân phối bởi hệ thống Amazon toàn cầu bao gồm sách in bìa cứng, sách in bìa mềm, sách điện tử.'
      }
    ],
    description: [
      'Sử dụng nội dung của công nghệ khiến truyền hình truyền thống phát triển tới một phương tiện độc lập sang đa nền tảng nhằm cải thiện trải nghiệm xem mới của công chúng hiện đại, với quyền chọn lựa nội dung theo lý (thuộc nhu cầu và thị hiếu), đúng nền tảng (thuận lợi và ưa thích) và đúng thời điểm (thời sự trình bày kết quả nghiên cứu về xu hướng mới này).',
      'Sách chuyên khảo Xu hướng Truyền hình Đa nền tảng ở Việt Nam hiện nay',
      'Hãy đọc hết cuốn sách này để:',
      '- Hiểu về cấu tạo, cơ chế hoạt động, thoát toán của các nền tảng kỹ thuật số mà truyền hình công sinh;',
      '- Hiểu về chiến lược lưu trữ, chiến lược công sinh, khai thác quảng cáo của truyền hình trên các nền tảng;',
      '- Có thêm những gợi mở để phát triển, hoàn thiện và "đạt lượng tối hạn" cho nền tảng của riêng các đài truyền hình.'
    ]
  };

  const handleBuyBook = () => {
    window.open('https://a.co/d/akw9IeS', '_blank');
  };

  return (
    <div className='py-12'>
      <div className='flex flex-col lg:flex-row gap-8 items-start'>
        {/* Book Cover */}
        <div className='w-full lg:w-2/5 mb-8 lg:mb-0 lg:sticky lg:top-24'>
          <div className='relative aspect-[3/4] w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto overflow-hidden rounded-lg'>
            <Image
              src='/images/slides/doc2.png'
              alt={bookInfo.title}
              fill
              className='object-contain shadow-2xl rounded-lg'
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw'
              priority
            />
          </div>
          <div className='mt-8 flex justify-center'>
            <Button
              data-slot='button'
              onClick={handleBuyBook}
              className='cursor-pointer px-6 py-2 rounded-md transition-all transform hover:scale-105'
            >
              <ShoppingCart className='w-5 h-5 mr-2' />
              Mua Sách
            </Button>
          </div>
        </div>

        {/* Book Details */}
        <div className='lg:w-3/5  space-y-4'>
          {/* Title Section */}
          <div className='mb-8'>
            <span className='text-2xl font-bold mb-2'>{bookInfo.title}</span>
            <span className=''>{' ' + bookInfo.subtitle}</span>
          </div>

          {/* Book Information */}
          <div className='bg-gradient-to-br from-red-50 to-gray-50 rounded-lg p-4 shadow-lg border-l-4 border-primary'>
            {bookInfo.details.map((detail, index) => (
              <div key={index} className='mb-4 last:mb-0'>
                <dt className='text-primary font-semibold text-lg mb-1'>{detail.label}</dt>
                <dd className='text-gray-800 pl-4 leading-relaxed'>{detail.value}</dd>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className='prose prose-lg max-w-none space-y-4'>
            <div className='bg-gradient-to-br from-red-50 to-gray-50 rounded-lg p-4 shadow-lg border-l-4 border-primary'>
              {bookInfo.description.slice(0, 2).map((paragraph, index) => (
                <p key={index} className='mb-4'>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className='bg-gradient-to-br from-red-50 to-gray-50 rounded-lg p-4 shadow-lg border-l-4 border-primary'>
              <h3 className='font-bold text-2xl mb-6 text-primary flex items-center'>{bookInfo.description[2]}</h3>
              <ul className='space-y-4'>
                {bookInfo.description.slice(3).map((point, index) => (
                  <li key={index} className='flex items-start bg-white/80 p-2 rounded-lg shadow-sm'>
                    <span className='block text-gray-800 leading-relaxed'>{point.replace('- ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
