import { useState, useEffect, PropsWithChildren } from 'react';

interface LazyBackgroundImageProps {
  src: string;
  className?: string;
}

export default function LazyBackgroundImage(
  props: PropsWithChildren<LazyBackgroundImageProps>,
) {
  const { src, className, children } = props;

  const [sourceLoaded, setSourceLoaded] = useState<string>();

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return (
    <div
      style={{ backgroundImage: `url(${sourceLoaded})` }}
      className={className}
    >
      {children}
    </div>
  );
}
