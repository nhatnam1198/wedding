import { useState } from 'react';
import AlbumCard from './AlbumCard';
import { ALBUMS } from './constants';
import './styles.css';
import Modal from 'components/Modal';
import { range } from 'lodash';
import Carousel from 'react-spring-3d-carousel';
import useClickOutside from 'hooks/useClickOutside';

export default function AlbumSection() {
  const [open, setOpen] = useState(false);
  const clickRef = useClickOutside(() => setOpen(false));

  const [goToSlide, setGoToSlide] = useState(0);

  const slides = range(16).map((index: number) => ({
    key: index,
    content: (
      <img
        src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1695534133/wedding%20site/1_pfu2e8.jpg"
        alt="ben-thanh"
      />
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
