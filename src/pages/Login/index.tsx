import { useDispatch } from 'umi';
import { Button, Card, Form, Input, Checkbox, Tabs } from 'antd';

import styles from './index.less';
import { useState } from 'react';

const { TabPane } = Tabs;

const LoginPage = (props: any) => {
  // console.log('login page ==>>> props', props);
  const [activeTab, setActiveTab] = useState('login');
  const dispatch = useDispatch();
  const handleSubmit = (values: { mobile: string; password: string }) => {
    if (activeTab == 'login') {
      dispatch({
        type: 'login/login',
        payload: values,
      });
    } else {
      dispatch({
        type: 'login/register',
        payload: values,
      });
    }
  };
  const tabChange = (activeKey: string) => {
    setActiveTab(activeKey);
  };
  return (
    <div className={styles.page}>
      <Card>
        <Tabs centered activeKey={activeTab} onChange={tabChange}>
          <TabPane tab="登录" key="login">
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
                <Input placeholder="手机号" />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请填写密码' }]}
              >
                <Input.Password placeholder="6~18位" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="register">
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
                <Input placeholder="手机号" />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请填写密码' }]}
              >
                <Input.Password placeholder="6~18位" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default LoginPage;
