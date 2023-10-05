import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface MySpinnerProps {
  color?: string;
}

export default function MySpinner(props: MySpinnerProps) {
  const { color = 'white' } = props;

  const antIcon = <LoadingOutlined style={{ color, fontSize: 24 }} spin />;

  return <Spin indicator={antIcon} />;
}
