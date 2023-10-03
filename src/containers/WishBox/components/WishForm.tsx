import { Form, Input, Button, ConfigProvider } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Wish, createWish } from 'api';
import { useState } from 'react';

type FieldType = Wish;

export default function WishForm({
  refetch,
}: {
  refetch: () => Promise<void>;
}) {
  const [form] = useForm<FieldType>();
  const [buttonLoading, setButtonLoading] = useState(false);

  const onFinish = async (values: FieldType) => {
    setButtonLoading(true);

    try {
      await createWish(values);
      setButtonLoading(false);
      form.resetFields();
      refetch();
    } catch (error) {
      alert('Please try again later!');
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            algorithm: true,
            colorPrimary: '#826542',
          },
          Input: {
            colorTextPlaceholder: '#000000',
          },
        },
      }}
    >
      <Form
        form={form}
        name="wish-form"
        className="mx-auto mb-20 max-w-[600px] w-11/12 fade-in"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="createdBy"
          className="w-full text-black"
          rules={[{ required: true, message: 'Please let us know your name' }]}
        >
          <Input
            className="input focus:border-stone-400 hover:border-stone-400"
            placeholder="Your name"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="content"
          rules={[
            {
              required: true,
              message: 'Please send your wishes to the groom and bride',
            },
          ]}
          className="w-full text-black"
        >
          <Input.TextArea
            rows={6}
            className="text-area focus:border-stone-400 hover:border-stone-400"
            placeholder="Your kind wishes go here"
          />
        </Form.Item>
        <Button
          loading={buttonLoading}
          htmlType="submit"
          type="primary"
          className="submit-button"
        >
          {buttonLoading ? 'Sending your wishes' : 'Send your wishes'}
        </Button>
      </Form>
    </ConfigProvider>
  );
}
