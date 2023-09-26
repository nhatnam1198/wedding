import { useState, useEffect, PropsWithChildren } from 'react';

interface LazyImageProps {
  src: string;
  className?: string;
}

export default function LazyImage(props: PropsWithChildren<LazyImageProps>) {
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
