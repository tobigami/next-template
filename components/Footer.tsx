import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { INFO_AUTHOR } from '@/constant/infomation';
import { ROUTES } from '@/constant/path';
import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white mt-8'>
      <div className='container py-4'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
          {/* Brand */}
          <div className='space-y-4'>
            <Link href='/' className='flex items-center space-x-2'>
              <span className='text-xl font-bold'>Tác Giả</span>
            </Link>
            {/* image author */}
            <div className='flex items-center gap-4'>
              <div className='relative w-16 h-16 rounded-full overflow-hidden'>
                <Image
                  src='/images/author/ava.png'
                  alt='Avatar tác giả'
                  fill
                  className='object-cover'
                  sizes='(max-width: 64px) 100vw, 64px'
                />
              </div>
              <div className='space-y-2'>
                <p className='font-semibold'>TS. Nguyễn Dương Chân</p>
                <div className='flex space-x-4'>
                  {INFO_AUTHOR.social.map((i) => {
                    if (i.url === '') return null; // Skip empty URLs
                    return (
                      <Button
                        key={i.name}
                        variant='link'
                        size='sm'
                        className='text-slate-300 hover:text-primary border cursor-pointer'
                      >
                        <Link href={i.url} target='blank'>
                          {i.icon && React.createElement(i.icon)}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Liên kết nhanh</h3>
            <ul className='space-y-2'>
              {/* <li>
                <Link href='/about' className='text-slate-300 hover:text-primary transition-colors'>
                  Giới thiệu
                </Link>
              </li> */}
              <li>
                <Link href={ROUTES.author} className='text-slate-300 hover:text-primary transition-colors'>
                  Tác giả
                </Link>
              </li>
              <li>
                <Link href={ROUTES.documents} className='text-slate-300 hover:text-primary transition-colors'>
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link href={ROUTES.books} className='text-slate-300 hover:text-primary transition-colors'>
                  Sách
                </Link>
              </li>

              {/* <li>
                <Link href={ROUTES.contact} className='text-slate-300 hover:text-primary transition-colors'>
                  Liên hệ
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Thông tin liên hệ</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-3'>
                <Mail className='h-5 w-5 text-primary' />
                <a href={`mailto:${INFO_AUTHOR.email}`} className='text-slate-300 hover:text-primary transition-colors'>
                  {INFO_AUTHOR.email}
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-primary' />
                <a href={`tel:${INFO_AUTHOR.phone}`} className='text-slate-300 hover:text-primary transition-colors'>
                  {INFO_AUTHOR.phone}
                </a>
              </div>
              <div className='flex items-center space-x-3'>
                <MapPin className='h-5 w-5 text-primary flex-shrink-0' />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(INFO_AUTHOR.address)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-300 hover:text-primary transition-colors'
                >
                  {INFO_AUTHOR.address}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Đăng ký nhận tin</h3>
            <p className='text-slate-300 text-sm'>Nhận thông báo về tác phẩm mới và sự kiện</p>
            <div className='flex space-x-2'>
              <Input
                type='email'
                placeholder='Email của bạn'
                className='bg-slate-800 border-slate-700 text-white placeholder:text-slate-400'
              />
              <Button size='sm' className='cursor-pointer'>
                Đăng ký
              </Button>
            </div>
          </div>
        </div>

        <div className='border-t border-slate-800 mt-6 pt-4 text-center'>
          <p className='text-slate-400'>© 2025 Tác Giả. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
