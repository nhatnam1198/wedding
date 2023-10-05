import classNames from 'classnames';

export interface Image {
  // the image will expand either horizontally, vertically, or both ways.
  // play around with this property to get the look you want
  stretch?: 'horizontal' | 'vertical' | 'big';
  src: string;
  numberOfPhotos?: number;
  description?: string;
  onClick: () => void;
}

const stretchClassNameDict: Record<'horizontal' | 'vertical' | 'big', string> =
  {
    horizontal: 'h-stretch',
    vertical: 'v-stretch',
    big: 'big-stretch',
  };

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="gallery">
      {images.map(({ stretch, src, numberOfPhotos, description, onClick }) => {
        const className = classNames(
          'fade-in cursor-pointer',
          stretch ? stretchClassNameDict[stretch] : '',
        );

        return (
          <div className={className} onClick={onClick}>
            <img src={src} alt={description} />
            <div
              style={{ textShadow: '1px 1px 2px black' }}
              className="p-3 text-white absolute -translate-y-20"
            >
              {numberOfPhotos && <p>{numberOfPhotos} PHOTOS</p>}
              {description && <h4>{description}</h4>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
