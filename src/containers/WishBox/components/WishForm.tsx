import { Form, Input, Button, ConfigProvider } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Wish, createWish } from 'api';

type FieldType = Wish;

export default function WishForm({
  refetch,
}: {
  refetch: () => Promise<void>;
}) {
  const [form] = useForm<FieldType>();

  const onFinish = async (values: FieldType) => {
    await createWish(values);
    form.resetFields();
    refetch();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: 'rgb(120, 113, 108)',
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      <Form
        form={form}
        className="fullscreen-img-content w-full"
        name="wish-form"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="createdBy"
          className="w-full text-white"
          rules={[{ required: true, message: 'Please let us know your name' }]}
        >
          <Input className="input" placeholder="Your name" />
        </Form.Item>
        <Form.Item<FieldType>
          name="content"
          rules={[
            {
              required: true,
              message: 'Please send your wishes to the groom and bride',
            },
          ]}
          className="w-full text-white"
        >
          <Input.TextArea
            rows={6}
            className="text-area"
            placeholder="Your kind wishes go here"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="submit-button">
            Send your wishes
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}
