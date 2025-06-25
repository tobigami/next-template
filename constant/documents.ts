import { ROUTES } from '@/constant/path';

export const dataDocuments = [
  {
    type: 'Sách chuyên khảo',
    name: 'Xu hướng truyền hình đa nền tảng ở Việt Nam Hiện nay',
    img: '/images/slides/doc2.png',
    url: ROUTES.books
  },
  {
    type: 'Tạp chí Khoa học Công nghệ Thông tin và Truyền thông',
    name: 'Kinh tế và truyền thông',
    img: '/images/slides/doc1.png',
    url: ''
  },
  {
    type: 'Lý luận chính trị và truyền thông',
    name: 'Chuyên đề số 1',
    img: '/images/slides/doc3.png',
    url: ''
  },
  {
    type: 'Lý luận chính trị và truyền thông',
    name: 'Một số vấn đề lý luận chính trị và truyền thông trong thực tiễn nghiên cứu và đào tạo',
    img: '/images/slides/doc4.png',
    url: ''
  }
] as const;
