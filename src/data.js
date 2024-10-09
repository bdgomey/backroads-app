import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    className: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://x.com/',
    className: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    className: 'fab fa-squarespace',
  },
];

export const service = [
  {
    id: 1,
    serviceTitle: 'saving money',
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 1,
    serviceTitle: 'endless hiking',
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 1,
    serviceTitle: 'amazing comfort',
    icon: 'fas fa-socks fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tourCard = [
  {
    id: 1,
    tourDate: 'august 26th, 2020',
    tourTitle: 'Tibet Adventure',
    tourDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    price: 'from $2100',
    image: tour1,
  },
  {
    id: 2,
    tourDate: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
    image: tour2,
  },
  {
    id: 3,
    tourDate: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: ' hong kong',
    duration: '8 days',
    price: 'from $5000',
    image: tour3,
  },
  {
    id: 4,
    tourDate: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '20 days',
    price: 'from $3300',
    image: tour4,
  },
];
