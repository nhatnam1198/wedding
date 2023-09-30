import LazyImage from 'components/LazyImage';
import './styles.css';

export default function Footer() {
  return (
    <LazyImage src="/images/song-sg/15.jpeg" className="footer h-[250px]">
      <div className="fullscreen-img-content flex flex-col gap-4">
        <h1>Hoang & Trinh</h1>
        <p>23 Oct 2023</p>
      </div>
    </LazyImage>
  );
}
