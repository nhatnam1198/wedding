import { Space } from 'antd';

interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  const { imgUrl = './images/bride.jpeg', title, description } = props;

  return (
    <div className="w-[450px] h-[600px] border-2 border-gray-300 rounded-3xl">
      <img
        src={imgUrl}
        alt={title}
        className="object-cover object-bottom w-[450px] h-[350px] rounded-t-3xl"
      />
      <Space direction="vertical" size="large" align="center" className="p-8">
        <h2 className="font-serif">{title}</h2>
        <p>{description}</p>
      </Space>
    </div>
  );
}
