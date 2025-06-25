import IntroAuthor from '@/components/Home/IntroAuthor';
import Publications from '@/components/Home/Publication';
import SlidesDocument from '@/components/Home/SlidesDocument';
import ProfileCarousel from '@/components/Home/SlidesHomePage';
import VideoAndImg from '@/components/Home/VideoAndImg';
import { Separator } from '@/components/ui/separator';

const carouselData = [
  {
    id: '1',
    subtitle: 'Chuyên gia nghiên cứu & giảng dạy trong lĩnh vực bảo chí – truyền thông đa nền tảng',
    title: 'TS. Nguyễn Dương Chân',
    description: `Trong thời đại bùng nổ công nghệ, truyền hình không còn chỉ là một kênh phát sóng đơn lẻ. Cuốn sách "Xu hướng Truyền hình Đa nền tảng ở Việt Nam hiện nay" mang đến góc nhìn toàn diện về sự chuyển mình của truyền hình hiện đại:

dựng nội dung (thuộc nhụ cầu, thị hiếu), dựng nền tảng (thuận lợi và ưa thích), và dựng thời điểm (thời sự và cập nhật)`,
    image: '/images/slides/slides1.jpg',
    imageAlt: 'TS. Nguyễn Dương Chân standing in front of historic buildings'
  },
  {
    id: '2',
    subtitle: 'Chuyên gia nghiên cứu & giảng dạy trong lĩnh vực bảo chí – truyền thông đa nền tảng',
    title: 'TS. Nguyễn Dương Chân',
    description: `Trong thời đại bùng nổ công nghệ, truyền hình không còn chỉ là một kênh phát sóng đơn lẻ. Cuốn sách "Xu hướng Truyền hình Đa nền tảng ở Việt Nam hiện nay" mang đến góc nhìn toàn diện về sự chuyển mình của truyền hình hiện đại:

dựng nội dung (thuộc nhụ cầu, thị hiếu), dựng nền tảng (thuận lợi và ưa thích), và dựng thời điểm (thời sự và cập nhật)`,
    image: '/images/slides/slides2.jpg',
    imageAlt: 'TS. Nguyễn Dương Chân standing in front of historic buildings'
  }
];

export default function Home() {
  return (
    <div className='space-y-10'>
      <div></div>
      <ProfileCarousel items={carouselData} />
      <Separator />
      <IntroAuthor />
      <Separator />
      <SlidesDocument />
      <Separator />
      <Publications />
      <Separator />
      <VideoAndImg />
    </div>
  );
}
