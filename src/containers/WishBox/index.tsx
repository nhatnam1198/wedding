import './styles.css';
import WishForm from './WishForm';
import { Wish, getWishes } from 'api';
import { useState, useEffect } from 'react';
import WishCard from './WishCard';
import MySpinner from 'components/MySpinner';
import { Button, Empty } from 'antd';
import dayjs from 'dayjs';
import { DATETIME_FORMAT } from 'appConstants';

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
  const [showAll, setShowAll] = useState(false);

  async function getWishesList() {
    setWishes({ loading: true });

    try {
      const data = await getWishes();

      setWishes({
        loading: false,
        data: data.sort(
          // @ts-ignore
          (a: Wish, b: Wish) =>
            dayjs(b.createdAt, DATETIME_FORMAT).valueOf() -
            dayjs(a.createdAt, DATETIME_FORMAT).valueOf(),
        ) as unknown as Wish[],
      });
    } catch (error) {
      setWishes({ loading: false, error: error as Error });
    }
  }

  useEffect(() => {
    getWishesList();
  }, []);

  const displayedWishes = showAll ? data : data?.slice(0, 4);

  function renderWishesList() {
    if (loading) {
      return <MySpinner color="#826542" />;
    }

    if (error || data?.length === 0) {
      return (
        <Empty
          description={
            <p className="text-black">
              It looks empty. Send the bridal couple your best wishes!
            </p>
          }
        />
      );
    }

    return (
      <div className="flex flex-col items-center gap-8 w-full">
        {displayedWishes?.map((wish) => (
          <WishCard key={wish.content} {...wish} />
        ))}
        {!showAll && data && data.length > 4 && (
          <Button
            type="link"
            onClick={() => setShowAll(true)}
            className="text-blue-500 underline cursor-pointer font-sans text-base"
          >
            Xem thêm
          </Button>
        )}
        {showAll && (
          <Button
            type="link"
            onClick={() => setShowAll(false)}
            className="text-blue-500 underline cursor-pointer font-sans text-base"
          >
            Rút gọn
          </Button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center mt-20 mb-10">
        <div className="from-bottom slide-in">
          <img src="/images/floral-ring.png" alt="" className="w-[270px]" />
          <h1 className="section-title -translate-y-[210px]">Guestbook</h1>
        </div>
        {renderWishesList()}
      </div>
      <WishForm refetch={getWishesList} />
    </>
  );
}
