import dayjs from 'dayjs';
import { Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { WEDDING_DATE } from 'appConstants';
import { useEffect, useState } from 'react';

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

  const antIcon = (
    <LoadingOutlined style={{ color: 'white', fontSize: 24 }} spin />
  );

  const spin = <Spin indicator={antIcon} />;

  return (
    <Space direction="vertical" style={{ textShadow: '1px 1px 2px black' }}>
      <strong>Save the date: 22 Oct 2023</strong>

      <Space direction="horizontal" size={30}>
        <Space direction="vertical">
          {days ? days : spin}
          DAYS
        </Space>
        <Space direction="vertical">
          {hours ? hours : spin}
          HOURS
        </Space>
        <Space direction="vertical">
          {minutes ? minutes : spin}
          MINUTES
        </Space>
        <Space direction="vertical">
          {seconds ? seconds : spin}
          SECONDS
        </Space>
      </Space>
    </Space>
  );
}
