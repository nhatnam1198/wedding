import CountdownTimer from './CountdownTimer';
import './styles.css';

export default function FullscreenPicture() {
  return (
    <div className="fullscreen-img">
      <div className="fullscreen-img-content">
        <h1 className="fullscreen-img-title">Ngọc Hoàng & Tú Trinh</h1>
        <CountdownTimer />
      </div>
    </div>
  );
}
