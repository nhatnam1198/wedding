import { useState } from 'react';
import AlbumCard from './AlbumCard';
import { ALBUMS } from './constants';
import './styles.css';
import Modal from 'components/Modal';
import { range } from 'lodash';
import Carousel from 'react-spring-3d-carousel';
import { CloseOutlined } from '@ant-design/icons';

export default function AlbumSection() {
  const [open, setOpen] = useState(false);

  const [goToSlide, setGoToSlide] = useState(0);

  const slides = range(16).map((index: number) => ({
    key: index,
    content: (
      <img src="/images/ben-thanh/1.jpeg" alt="ben-thanh" loading="lazy" />
    ),
    onClick: () => setGoToSlide(index),
  }));

  function onClickCard() {
    setOpen(true);
  }

  function onCloseAlbum() {
    setOpen(false);
  }

  return (
    <>
      <div className="section">
        <h1 className="section-title">Moments</h1>
        <div className="section-description">
          Bliss unfurls when I gaze upon you, and within your eyes lies my
          entire world.
        </div>
        <div className="grid auto-cols-auto lg:grid-cols-2 gap-4">
          {ALBUMS.map((album) => (
            <AlbumCard
              {...album}
              key={album.description}
              onClick={onClickCard}
            />
          ))}
        </div>
      </div>
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
