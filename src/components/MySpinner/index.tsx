import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function MySpinner() {
  const antIcon = (
    <LoadingOutlined style={{ color: 'white', fontSize: 24 }} spin />
  );

  return <Spin indicator={antIcon} />;
}
