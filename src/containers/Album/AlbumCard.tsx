import LazyBackgroundImage from 'components/LazyBackgroundImage';
import './styles.css';

export interface AlbumCardProps {
  imgUrl: string;
  numberOfPhotos: number;
  description: string;
  onClick: () => void;
}

export default function AlbumCard(props: AlbumCardProps) {
  const { imgUrl, numberOfPhotos, onClick, description } = props;

  return (
    <div
      className="cursor-pointer rounded-xl overflow-hidden h-[350px] w-[350px] lg:h-[400px] lg:w-[400px]"
      onClick={onClick}
    >
      <LazyBackgroundImage
        src={imgUrl}
        className="w-full h-full bg-center bg-no-repeat bg-cover album-card relative"
      />
      <div
        style={{ textShadow: '1px 1px 2px black' }}
        className="p-6 text-white absolute -translate-y-28"
      >
        <p>{numberOfPhotos} PHOTOS</p>
        <h3>{description}</h3>
      </div>
    </div>
  );
}
