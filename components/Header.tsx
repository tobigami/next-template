'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BookOpen, User, FileText, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/constant/path';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Trang chủ', href: ROUTES.home, icon: Home },
    { name: 'Tác giả', href: ROUTES.author, icon: User },
    { name: 'Sách', href: ROUTES.books, icon: BookOpen },
    { name: 'Tài liệu', href: ROUTES.documents, icon: FileText }
    // { name: 'Góc nhìn', href: ROUTES.perspective, icon: MessageCircle },
    // { name: 'Liên hệ', href: ROUTES.contact, icon: Contact }
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='container'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <BookOpen className='h-8 w-8 text-primary' />
            <span className='text-xl font-bold text-slate-900'></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-slate-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='sm'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-80'>
              <div className='flex flex-col space-y-2 mt-8'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 text-lg font-medium transition-colors hover:text-amber-600 p-2 rounded-lg',
                      pathname === item.href ? 'text-amber-600 bg-amber-50' : 'text-slate-600'
                    )}
                  >
                    <item.icon className='h-5 w-5' />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
