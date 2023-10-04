import dayjs from 'dayjs';
import { Space } from 'antd';
import { WEDDING_DATE } from 'appConstants';
import { useEffect, useState } from 'react';
import MySpinner from 'components/MySpinner';

export default function CountdownTimer() {
  const countDownDate = dayjs(WEDDING_DATE).valueOf();
  const now = dayjs().valueOf();

  const [distance, setDistance] = useState(countDownDate - now);
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  useEffect(() => {
    const countdown = setInterval(function () {
      const newDistance = countDownDate - dayjs().valueOf();
      setDistance(newDistance);

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(newDistance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      setMinutes(Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((newDistance % (1000 * 60)) / 1000));

      if (newDistance <= 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }, [distance, countDownDate]);

  if (days === 0) {
    return <p>The wedding is today!</p>;
  }

  if (distance < 0) {
    return <p>We are married!</p>;
  }

  return (
    <Space direction="vertical" style={{ textShadow: '1px 1px 2px black' }}>
      <strong>Ngày Mon gả cho Oxy: 22.10.2023</strong>

      <Space direction="horizontal" size={30}>
        <Space direction="vertical">
          {days ? days : <MySpinner />}
          Ngày
        </Space>
        <Space direction="vertical">
          {hours ? hours : <MySpinner />}
          Giờ
        </Space>
        <Space direction="vertical">
          {minutes ? minutes : <MySpinner />}
          Phút
        </Space>
        <Space direction="vertical">
          {seconds ? seconds : <MySpinner />}
          Giây
        </Space>
      </Space>
    </Space>
  );
}
