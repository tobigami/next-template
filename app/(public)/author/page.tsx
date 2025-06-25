import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function AuthorPage() {
  return (
    <div className='py-12'>
      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row gap-12 items-center mb-16'>
        <div className='lg:w-1/3'>
          <Image
            src='/images/author/1.jpg'
            alt='TS. Nguyễn Dương Chân'
            width={400}
            height={500}
            className='rounded-lg shadow-lg'
          />
        </div>
        <div className='lg:w-2/3'>
          <h1 className='text-4xl font-bold mb-4'>TS. Nguyễn Dương Chân</h1>
          <p className='text-xl text-gray-600 mb-6'>
            Chuyên gia nghiên cứu và giảng dạy trong lĩnh vực báo chí, truyền thông
          </p>
          <div className='bg-gray-50 p-6 rounded-lg'>
            <p className='text-lg mb-4'>
              Hiện đang là giảng viên Trường Đại học Công Đoàn và có khoảng 15 năm kinh nghiệm làm việc tại các cơ quan
              báo chí, như: VTV9 – Đài Truyền hình Việt Nam, Truyền hình Nhân Dân.
            </p>
          </div>
        </div>
      </div>

      {/* Academic Background */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold mb-6'>Trình độ chuyên môn</h2>
        <Separator className='mb-6' />
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold mb-4'>Học vấn</h3>
            <ul className='space-y-3'>
              <li>• Tiến sĩ Báo chí – Học viện Báo chí và Tuyền truyền</li>
              <li>• Thạc sĩ Quản lý Báo chí & Truyền thông</li>
              <li>• Cử nhân Sư phạm Ngữ văn</li>
              <li>• Cử nhân Ngôn ngữ Anh</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold mb-4'>Lĩnh vực quan tâm</h3>
            <ul className='space-y-3'>
              <li>• Truyền hình đa nền tảng, hội tụ truyền thông</li>
              <li>• Kinh tế truyền thông</li>
              <li>• Giáo dục báo chí trong thời đại số</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Teaching Experience */}
      <section className='mb-16'>
        <h2 className='text-3xl font-bold mb-6'>Kinh nghiệm giảng dạy</h2>
        <Separator className='mb-6' />
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold mb-4'>Trường Đại học</h3>
            <ul className='space-y-3'>
              <li>• Trường ĐH Văn hóa TP.HCM</li>
              <li>• Trường ĐH Công Đoàn (Hà Nội)</li>
            </ul>
          </div>
          <div className='bg-white p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold mb-4'>Chuyên môn giảng dạy</h3>
            <p>
              Giảng dạy các môn học liên quan đến báo chí, truyền thông, kỹ năng sản xuất nội dung truyền thông đa
              phương tiện và nghiên cứu truyền thông.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
