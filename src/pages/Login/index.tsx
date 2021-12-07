import { useDispatch } from 'umi';
import { Button, Card, Form, Input, Checkbox } from 'antd';

import styles from './index.less';

const LoginPage = (props: any) => {
  // console.log('props', props);
  const dispatch = useDispatch();
  const handleSubmit = (values: { mobile: string; password: string }) => {
    dispatch({
      type: 'login/login',
      payload: values,
    });
  };
  return (
    <div className={styles.page}>
      <Card>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="mobile"
            rules={[{ required: true, message: '请填写账号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请填写密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
