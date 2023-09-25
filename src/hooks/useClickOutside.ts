import { useCallback, useEffect, useRef } from 'react';

export default function useClickOutside(handler: () => void) {
  const clickRef = useRef(null);

  const clickOutside = useCallback(
    (e: MouseEvent) => {
      // @ts-ignore
      if (clickRef.current && !clickRef.current.contains(e.target)) handler();
    },
    [handler],
  );

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickOutside]);

  return clickRef;
}
