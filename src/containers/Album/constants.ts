import { AlbumCardProps } from './AlbumCard';

export const ALBUMS: Omit<AlbumCardProps, 'onClick'>[] = [
  {
    imgUrl: '/images/ben-thanh/1.jpeg',
    numberOfPhotos: 16,
    description: 'Hình cưới trước chợ Bến Thành',
  },
  {
    imgUrl: '/images/nha-hat/1.jpeg',
    numberOfPhotos: 14,
    description: 'Hình cưới trước nhà hát thành phố',
  },
  {
    imgUrl: '/images/song-sg/1.jpeg',
    numberOfPhotos: 18,
    description: 'Hình cưới bên sông Sài Gòn',
  },
  {
    imgUrl: '/images/sapa/1.jpeg',
    numberOfPhotos: 22,
    description: 'Hình cưới ở Sapa',
  },
];
