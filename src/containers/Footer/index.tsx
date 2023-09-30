import LazyBackgroundImage from 'components/LazyBackgroundImage';
import './styles.css';

export default function Footer() {
  return (
    <LazyBackgroundImage
      src="/images/song-sg/15.jpeg"
      className="footer h-[250px]"
    >
      <div className="fullscreen-img-content flex flex-col gap-4">
        <h1 className="lg:text-5xl text-2xl">Hoang & Trinh</h1>
        <p>22 Oct 2023</p>
      </div>
    </LazyBackgroundImage>
  );
}
