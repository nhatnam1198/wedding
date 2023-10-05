import { useMemo, useState } from 'react';
import './styles.css';
import Modal from 'components/Modal';
import { range } from 'lodash';
import Carousel from 'react-spring-3d-carousel';
import { CloseOutlined } from '@ant-design/icons';
import Gallery, { Image } from './Gallery';

type AlbumName = 'nha-hat' | 'song-sg' | 'ben-thanh' | 'sapa' | 'tabby';

const albumDict: Record<AlbumName, number> = {
  'nha-hat': 14,
  'song-sg': 18,
  sapa: 22,
  'ben-thanh': 16,
  tabby: 1,
};

export default function Album() {
  const [open, setOpen] = useState(false);

  const [goToSlide, setGoToSlide] = useState(0);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumName>();

  const numberOfSlides = albumDict[selectedAlbum ?? 'ben-thanh'];

  const slides = useMemo(
    () =>
      range(numberOfSlides).map((index) => ({
        key: index,
        content: (
          <img
            src={`/images/${selectedAlbum}/${index + 1}.jpeg`}
            alt={selectedAlbum}
          />
        ),
        onClick: () => setGoToSlide(index),
      })),
    [numberOfSlides, selectedAlbum],
  );

  function onClickCard(album: AlbumName) {
    setSelectedAlbum(album);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function onCloseAlbum() {
    setOpen(false);
    document.body.style.overflow = 'auto';
  }

  const IMAGES: Image[] = [
    {
      src: '/images/ben-thanh/7.jpeg',
      numberOfPhotos: albumDict['ben-thanh'],
      description: 'Hinh truoc cho Ben Thanh',
      onClick: () => onClickCard('ben-thanh'),
    },
    {
      src: '/images/song-sg/10.jpeg',
      numberOfPhotos: albumDict['song-sg'],
      description: 'Hinh truoc song Sai Gon',
      onClick: () => onClickCard('song-sg'),
      stretch: 'horizontal',
    },
    {
      src: '/images/sapa/1.jpeg',
      numberOfPhotos: albumDict['sapa'],
      description: 'Hinh o Sapa',
      onClick: () => onClickCard('sapa'),
      stretch: 'big',
    },
    {
      src: '/images/nha-hat/12.jpeg',
      numberOfPhotos: albumDict['nha-hat'],
      description: 'Hinh truoc nha hat thanh pho',
      onClick: () => onClickCard('nha-hat'),
    },
    {
      src: '/images/tabby/1.jpeg',
      numberOfPhotos: albumDict['tabby'],
      description: 'Tabby',
      onClick: () => onClickCard('tabby'),
    },
    // {
    //   src: '/images/song-sg/2.jpeg',
    //   numberOfPhotos: albumDict['song-sg'],
    //   description: 'Hinh truoc song Sai Gon',
    //   onClick: () => onClickCard('song-sg'),
    //   stretch: 'vertical',
    // },
    // {
    //   src: '/images/sapa/2.jpeg',
    //   numberOfPhotos: albumDict['sapa'],
    //   description: 'Hinh o Sapa',
    //   onClick: () => onClickCard('sapa'),
    // },
    // {
    //   src: '/images/sapa/3.jpeg',
    //   numberOfPhotos: albumDict['sapa'],
    //   description: 'Hinh o Sapa',
    //   onClick: () => onClickCard('sapa'),
    // },
    // {
    //   src: '/images/nha-hat/2.jpeg',
    //   numberOfPhotos: albumDict['nha-hat'],
    //   description: 'Hinh truoc nha hat thanh pho',
    //   onClick: () => onClickCard('nha-hat'),
    //   stretch: 'horizontal',
    // },
  ];

  return (
    <>
      <Gallery images={IMAGES} />
      <Modal visible={open}>
        <CloseOutlined
          className="absolute top-10 right-10 cursor-pointer z-50 text-white text-2xl"
          onClick={onCloseAlbum}
        />
        <Carousel
          showNavigation={false}
          goToSlide={goToSlide}
          slides={slides}
          offsetRadius={2}
          animationConfig={{
            tension: 120,
            fiction: 14,
          }}
        />
      </Modal>
    </>
  );
}
