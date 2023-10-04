import { Space, SpaceProps } from 'antd';
import useViewportWidth from 'hooks/useViewportWidth';
import { useEffect, useState } from 'react';

export interface CardProps {
  imgUrl: string;
  date?: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right' | 'top';
  direction?: SpaceProps['direction'];
  className?: string;
}

export default function Card(props: CardProps) {
  const {
    imgUrl,
    title,
    description,
    direction: propDirection = 'vertical',
    imagePosition = 'top',
    date,
  } = props;

  const windowWidth = useViewportWidth();
  const [direction, setDirection] =
    useState<SpaceProps['direction']>(propDirection);

  // Determine the direction based on windowWidth
  useEffect(() => {
    if (propDirection === 'horizontal') {
      setDirection(windowWidth >= 900 ? 'horizontal' : 'vertical');
    }
  }, [windowWidth, propDirection]);

  const containerDimension =
    direction === 'vertical'
      ? 'w-[450px] min-h-[600px] flex-col'
      : 'w-[800px] min-h-[300px] flex-row';
  let imgDimension =
    direction === 'vertical'
      ? 'w-[450px] h-[350px] rounded-t-2xl'
      : 'w-[300px] h-[296px]';

  if (imagePosition === 'left' && direction === 'horizontal') {
    imgDimension = `${imgDimension} rounded-l-2xl`;
  }

  if (imagePosition === 'right' && direction === 'horizontal') {
    imgDimension = `${imgDimension} rounded-r-2xl`;
  }

  return (
    <div
      className={`${containerDimension} max-w-[90vw] h-fit flex ${
        imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
      } border-2 border-stone-400 rounded-2xl ${
        direction === 'horizontal' ? 'slide-in from-bottom' : 'fade-in'
      }`}
    >
      <img
        src={imgUrl}
        alt={title}
        className={`object-cover object-center ${imgDimension}`}
        loading="lazy"
      />
      <Space
        direction="vertical"
        size="large"
        align={imagePosition === 'top' ? 'center' : 'start'}
        className="p-8"
      >
        <strong className="text-[#57442c]">{date}</strong>
        <h2 className="font-serif text-[#57442c]">{title}</h2>
        <p className="card-description">{description}</p>
      </Space>
    </div>
  );
}
