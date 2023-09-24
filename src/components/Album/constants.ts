import { AlbumCardProps } from './AlbumCard';

export const ALBUMS: Omit<AlbumCardProps, 'onClick'>[] = [
  {
    imgUrl:
      'https://res.cloudinary.com/dw5ii3leu/image/upload/v1695527271/wedding%20site/1_ooqk59.jpg',
    numberOfPhotos: 16,
    description: 'Hình cưới trước chợ Bến Thành',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/dw5ii3leu/image/upload/v1695527269/wedding%20site/1_ad493c.jpg',
    numberOfPhotos: 14,
    description: 'Hình cưới trước nhà hát thành phố',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/dw5ii3leu/image/upload/v1695527239/wedding%20site/1_r4yqma.jpg',
    numberOfPhotos: 18,
    description: 'Hình cưới bên sông Sài Gòn',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/dw5ii3leu/image/upload/v1695534133/wedding%20site/1_pfu2e8.jpg',
    numberOfPhotos: 22,
    description: 'Hình cưới ở Sapa',
  },
];
