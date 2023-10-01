import './styles.css';
import WishForm from './components/WishForm';
import { Wish, getWishes } from 'api';
import { useState, useEffect } from 'react';
import LazyBackgroundImage from 'components/LazyBackgroundImage';
import WishCard from './components/WishCard';
import MySpinner from 'components/MySpinner';

interface AsyncState<Type> {
  loading?: boolean;
  data?: Type;
  error?: Error;
}

export default function WishBox() {
  const [wishes, setWishes] = useState<AsyncState<Wish[]>>({
    loading: false,
  });

  const { data, loading, error } = wishes;

  async function getWishesList() {
    setWishes({ loading: true });

    try {
      const data = await getWishes();
      setWishes({ loading: false, data: data as unknown as Wish[] });
    } catch (error) {
      setWishes({ loading: false, error: error as Error });
    }
  }

  useEffect(() => {
    getWishesList();
  }, []);

  function renderWishesList() {
    if (loading) {
      return <MySpinner color="#826542" />;
    }

    if (error || data?.length === 0) {
      return (
        <p className="max-w-[90%]">
          It looks empty. Send the bridal couple your best wishes!
        </p>
      );
    }

    return data?.map((wish) => <WishCard key={wish.content} {...wish} />);
  }

  return (
    <>
      <LazyBackgroundImage
        className="w-screen min-h-[400px] footer bg-right-bottom bg-no-repeat bg-cover relative"
        src="/images/sapa/8.jpeg"
      >
        <WishForm refetch={getWishesList} />
      </LazyBackgroundImage>
      <div className="flex flex-col items-center py-20">
        <div className="from-bottom slide-in">
          <img src="/images/floral-ring.png" alt="" className="w-[270px]" />
          <h1 className="section-title -translate-y-[210px]">Guestbook</h1>
        </div>
        {renderWishesList()}
      </div>
    </>
  );
}
