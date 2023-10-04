import LazyBackgroundImage from 'components/LazyBackgroundImage';
import './styles.css';

export default function Footer() {
  return (
    <LazyBackgroundImage
      src="/images/footer-1.jpg"
      className="footer h-[250px]"
    >
      <div className="absolute text-center flex justify-center items-center text-white h-full w-full">
        <div>
          <h1 className="mb-[0.5em]">Hoang & Trinh</h1>
          <p className="text-2xl">22 Oct 2023</p>
        </div>
      </div>
    </LazyBackgroundImage>
  );
}
