import { PropsWithChildren } from 'react';

export default function Modal(props: PropsWithChildren) {
  console.log('hello');
  return (
    <div className="bg-blue-500 fixed flex items-center justify-center w-screen h-screen z-100 top-0 left-0">
      TBU
    </div>
  );
}
