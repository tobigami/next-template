import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ROUTES } from '@/constant/path';

const introData = {
  name: 'TS. Nguyễn Dương Chân',
  des: `TS. Nguyễn Dương Chân là nhà nghiên cứu và giảng viên giàu kinh nghiệm trong lĩnh vực báo chí và truyền thông hiện đại, đặc biệt chuyên sâu về truyền hình đa nền tảng và chuyển đổi số. Anh hiện công tác tại Trường Đại học Công Đoàn và từng giảng dạy tại Đại học Văn hóa TP. Hồ Chí Minh. Trước đó, anh đã có hơn một thập kỷ làm việc trong môi trường báo chí thực tế tại các đài truyền hình lớn như VTV9, Truyền hình Nhân Dân, Truyền hình Quân đội. 
    Tốt nghiệp Tiến sĩ chuyên ngành Báo chí học, Thạc sĩ Quản lý Báo chí – Truyền thông, cùng hai bằng cử nhân Ngữ văn và Ngôn ngữ Anh, TS. Chân sở hữu nền tảng học thuật và thực tiễn vững chắc. Anh đã công bố nhiều bài nghiên cứu trên các tạp chí khoa học uy tín và là tác giả của cuốn sách chuyên khảo Xu hướng truyền hình đa nền tảng ở Việt Nam hiện nay.
    Với niềm đam mê nghiên cứu và đổi mới giáo dục truyền thông, anh đang không ngừng nỗ lực đóng góp vào sự phát triển bền vững và hiện đại hóa của báo chí – truyền hình Việt Nam.
  `
};

export default function IntroAuthor() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='relative h-[400px] md:h-[600px] rounded-md overflow-hidden'>
          <Image src='/images/slides/author.jpg' alt={introData.name} fill className='object-cover' priority />
        </div>
        <div className='space-y-4'>
          <p className='line-clamp-[12]'>{introData.des}</p>
          <div className='pt-4'>
            <Button asChild>
              <Link href={ROUTES.author}>Xem thêm</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
