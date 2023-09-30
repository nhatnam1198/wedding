import { Button, Form, Input } from 'antd';
import LazyImage from 'components/LazyImage';
import './styles.css';

type FieldType = {
  name: string;
  wishes: string;
};

export default function WishBox() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LazyImage
      className="w-screen min-h-[400px] my-20 footer bg-right-bottom bg-no-repeat bg-cover relative"
      src="/images/sapa/8.jpeg"
    >
      <Form
        className="fullscreen-img-content text-white"
        name="wish-form"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="name"
          rules={[{ required: true, message: 'Please let us know your name' }]}
        >
          <Input className="input" placeholder="Your name" />
        </Form.Item>
        <Form.Item<FieldType>
          name="wishes"
          rules={[
            {
              required: true,
              message: 'Please send your wishes to the groom and bride',
            },
          ]}
        >
          <Input.TextArea
            // autoSize={{ maxRows: 6 }}
            rows={6}
            className="text-area"
            placeholder="Your kind wishes"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Send your wishes
          </Button>
        </Form.Item>
      </Form>
    </LazyImage>
  );
}
