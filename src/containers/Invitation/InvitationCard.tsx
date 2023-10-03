import {
  CalendarOutlined,
  EnvironmentOutlined,
  HeartFilled,
} from '@ant-design/icons';

export interface InvitationCardProps {
  title: string;
  datetime: string;
  locationName: string;
  locationDetail: string;
}

export default function InvitationCard(props: InvitationCardProps) {
  const { locationName, locationDetail, datetime, title } = props;

  return (
    <div className="flex flex-col gap-8 items-center bg-[#d8c393] max-w-[99%] h-fit p-8 w-[550px] mx-auto rounded-xl text-center fade-in">
      <h1>{title}</h1>
      <HeartFilled />
      <div className="flex flex-col items-center gap-4">
        <h2>Thời gian</h2>
        <span>
          <CalendarOutlined /> {datetime}
        </span>
      </div>
      <hr className="w-10" />
      <div className="flex flex-col items-center gap-4">
        <h2>Địa điểm</h2>
        <h4 className="whitespace-pre-line flex flex-col items-center">
          {locationName}
        </h4>
        <span>
          <EnvironmentOutlined /> {locationDetail}
        </span>
      </div>
    </div>
  );
}
