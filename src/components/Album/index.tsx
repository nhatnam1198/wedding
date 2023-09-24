import { useState } from 'react';
import AlbumCard from './AlbumCard';
import { ALBUMS } from './constants';
import { Carousel, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './styles.css';

export default function AlbumSection() {
  const [open, setOpen] = useState(false);

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
      <Modal
        open={open}
        footer={null}
        width={1050}
        onCancel={onCloseAlbum}
        centered
        closeIcon={false}
        keyboard
        bodyStyle={{
          padding: 0,
        }}
      >
        <Carousel
          draggable
          infinite
          effect="fade"
          arrows
          accessibility
          centerMode
          nextArrow={<RightOutlined />}
          prevArrow={<LeftOutlined />}
        >
          <img src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1695527271/wedding%20site/1_ooqk59.jpg" />

          {/* <img src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1695527269/wedding%20site/1_ad493c.jpg" /> */}
          <img src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1695527239/wedding%20site/1_r4yqma.jpg" />
        </Carousel>
      </Modal>
    </>
  );
}
