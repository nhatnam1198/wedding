import LazyBackgroundImage from 'components/LazyBackgroundImage';
import CountdownTimer from './CountdownTimer';
import './styles.css';

export default function FullscreenPicture() {
  return (
    <LazyBackgroundImage
      className="fullscreen-img fade-in"
        src="/images/fullscreen_v2.JPG"
    >
      <div className="fullscreen-img-content">
        <h1 className="fullscreen-img-title">Ngọc Hoàng & Tú Trinh</h1>
        <CountdownTimer />
      </div>
    </LazyBackgroundImage>
  );
}
