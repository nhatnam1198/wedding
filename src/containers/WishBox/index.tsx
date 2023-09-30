import './styles.css';
import WishForm from './components/WishForm';
import WishList from './components/WishList';
import { Wish, getWishes } from 'api';
import { useState, useEffect } from 'react';
import LazyBackgroundImage from 'components/LazyBackgroundImage';

export default function WishBox() {
  const [wishes, setWishes] = useState<Wish[]>([]);

  async function getWishesList() {
    const data = await getWishes();
    setWishes(data as unknown as Wish[]);
  }

  useEffect(() => {
    getWishesList();
  }, []);

  return (
    <>
      <LazyBackgroundImage
        className="w-screen min-h-[400px] footer bg-right-bottom bg-no-repeat bg-cover relative"
        src="/images/sapa/8.jpeg"
      >
        <WishForm refetch={getWishesList} />
      </LazyBackgroundImage>
      <WishList wishes={wishes} />
    </>
  );
}
