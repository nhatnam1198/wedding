export type Album = {
  imgUrl: string;
  numberOfPhotos: number;
  description: string;
  albumName: 'ben-thanh' | 'sapa' | 'nha-hat' | 'song-sg';
};

export const ALBUMS: Album[] = [
  {
    imgUrl: '/images/ben-thanh/1.jpeg',
    numberOfPhotos: 16,
    description: 'Hình cưới trước chợ Bến Thành',
    albumName: 'ben-thanh',
  },
  {
    imgUrl: '/images/nha-hat/1.jpeg',
    numberOfPhotos: 14,
    description: 'Hình trước nhà hát thành phố',
    albumName: 'nha-hat',
  },
  {
    imgUrl: '/images/song-sg/1.jpeg',
    numberOfPhotos: 18,
    description: 'Hình cưới bên sông Sài Gòn',
    albumName: 'song-sg',
  },
  {
    imgUrl: '/images/sapa/1.jpeg',
    numberOfPhotos: 22,
    description: 'Hình cưới ở Sapa',
    albumName: 'sapa',
  },
];
