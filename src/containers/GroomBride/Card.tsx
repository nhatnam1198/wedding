import { Space, SpaceProps } from 'antd';
import classNames from 'classnames';
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
  imgClassName?: string;
}

export default function Card(props: CardProps) {
  const {
    imgUrl,
    title,
    description,
    direction: propDirection = 'vertical',
    imagePosition = 'top',
    date,
    className,
    imgClassName,
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
      ? 'w-[450px] min-h-[400px] flex-col'
      : 'w-[800px] min-h-[300px] flex-row';
  let imgDimension =
    direction === 'vertical'
      ? 'w-[450px] h-[375px]'
      : 'w-[300px] min-h-[300px]';

  return (
    <div
      className={classNames(
        className,
        `${containerDimension} overflow-hidden max-w-[90vw] h-fit flex ${
          imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
        } border-2 border-stone-400 rounded-2xl ${
          direction === 'horizontal' ? 'slide-in from-bottom' : 'fade-in'
        }`,
      )}
    >
      <img
        src={imgUrl}
        alt={title}
        className={classNames(
          `object-cover object-center ${imgDimension}`,
          imgClassName,
        )}
        loading="lazy"
      />
      <Space
        direction="vertical"
        size="large"
        align={imagePosition === 'top' ? 'center' : 'start'}
        className="p-8"
      >
        <strong className="text-[#57442c]">{date}</strong>
        <h2 className="font-serif text-[#57442c] whitespace-pre-line">
          {title}
        </h2>
        <p className="card-description">{description}</p>
      </Space>
    </div>
  );
}
