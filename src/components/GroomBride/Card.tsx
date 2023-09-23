import { Space, SpaceProps } from 'antd';
import { useEffect, useState } from 'react'; // Import useEffect and useState

interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
  direction?: SpaceProps['direction'];
}

export default function Card(props: CardProps) {
  const {
    imgUrl,
    title,
    description,
    direction: propDirection = 'vertical',
  } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [direction, setDirection] =
    useState<SpaceProps['direction']>(propDirection);

  // Add an event listener to update windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine the direction based on windowWidth
  useEffect(() => {
    if (propDirection === 'horizontal') {
      setDirection(windowWidth >= 900 ? 'horizontal' : 'vertical');
    }
  }, [windowWidth, propDirection]);

  const containerDimension =
    direction === 'vertical'
      ? 'w-[450px] min-h-[600px] flex-col'
      : 'w-[860px] min-h-[300px] flex-row';
  const imgDimension =
    direction === 'vertical'
      ? 'w-[450px] h-[350px] rounded-t-3xl'
      : 'w-[300px] h-[296px] rounded-l-3xl';

  return (
    <div
      className={`${containerDimension} max-w-[90vw] h-fit flex border-2 border-stone-400 rounded-3xl`}
    >
      <img
        src={imgUrl}
        alt={title}
        className={`object-cover object-bottom ${imgDimension}`}
        loading="lazy"
      />
      <Space direction="vertical" size="large" align="center" className="p-8">
        <h2 className="font-serif text-[#57442c]">{title}</h2>
        <p>{description}</p>
      </Space>
    </div>
  );
}
