import { PropsWithChildren } from 'react';

interface ModalProps {
  visible: boolean;
}

export default function Modal({
  children,
  visible,
}: PropsWithChildren<ModalProps>) {
  if (!visible) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: 'rgb(0,0,0,0.9)' }}
      className="fixed flex items-center justify-center w-screen h-screen z-100 top-0 left-0"
    >
      {children}
    </div>
  );
}
