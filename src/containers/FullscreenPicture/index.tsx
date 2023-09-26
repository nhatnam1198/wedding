import LazyImage from 'components/LazyImage';
import CountdownTimer from './CountdownTimer';
import './styles.css';

export default function FullscreenPicture() {
  return (
    <LazyImage className="fullscreen-img" src="/images/fullscreen.jpeg">
      <div className="fullscreen-img-content">
        <h1 className="fullscreen-img-title">Ngọc Hoàng & Tú Trinh</h1>
        <CountdownTimer />
      </div>
    </LazyImage>
  );
}
