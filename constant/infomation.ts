import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export const INFO_AUTHOR = {
  name: 'Nguyễn Dương Chân',
  email: 'duongchan6688@gmail.com',
  phone: '0243 884 3884',
  address: 'Khoa Truyền thông và Quan hệ Công chúng, Trường Đại học Công Đoàn, 169 phố Tây Sơn, thủ đô Hà Nội.',
  social: [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/DuongChan6688',
      icon: Facebook
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/mynetwork/discovery-see-all/?usecase=PEOPLE_FOLLOWS&followMember=d%C6%B0%C6%A1ng-ch%C3%A2n-nguy%E1%BB%85n-2b729236a',
      icon: Linkedin
    },
    {
      name: 'instagram',
      url: '',
      icon: Instagram
    },
    {
      name: 'twitter',
      url: '',
      icon: Twitter
    },
    {
      name: 'instagram',
      url: '',
      icon: Instagram
    }
  ]
} as const;
