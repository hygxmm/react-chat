import {
  Modal,
  Upload,
  Form,
  message,
  Avatar,
  Input,
  Button,
  Space,
} from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'umi';
import { useState } from 'react';

const UserInfoPopup = () => {
  const { popupVisible, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // 头像
  const [avatar, setAvatar] = useState(userInfo.avatar);
  const uploadAvatar = (e) => {
    const {
      file: { status, response },
    } = e;
    if (status === 'done') {
      const { code, data, msg } = response;
      if (code == 0) {
        setAvatar(data[0].path);
        dispatch({
          type: 'user/changeAvatar',
          payload: {
            avatar: data[0].path,
          },
        });
      } else {
        message.error(msg);
      }
    }
  };
  // 昵称
  const [username, setUsername] = useState(userInfo.username);
  const changeUsername = () => {
    dispatch({
      type: 'user/changeUsername',
      payload: { username },
    });
  };
  // 密码
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const changePassword = () => {
    dispatch({
      type: 'user/changePassword',
      payload: {
        password,
        password2,
      },
    });
  };

  return (
    <Modal
      title="个人信息"
      closeIcon={<CloseCircleOutlined />}
      visible={popupVisible}
      footer={null}
      onCancel={() => dispatch({ type: 'user/closeUserInfoPopup' })}
    >
      <Form className="">
        <Form.Item label="修改头像">
          <Upload
            name="avatar"
            listType="picture-card"
            accept="image/*"
            showUploadList={false}
            action="http://127.0.0.1:7001/api/user/uploadImage"
            onChange={uploadAvatar}
          >
            <Avatar shape="square" size={102} src={avatar} />
          </Upload>
        </Form.Item>
        <Form.Item label="修改昵称">
          <Space>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type={'primary'} onClick={changeUsername}>
              修改昵称
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="修改密码">
          <Space>
            <Input
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="旧密码"
            />
            <Input
              type={'password'}
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="新密码"
            />
            <Button type={'primary'} onClick={changePassword}>
              修改密码
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserInfoPopup;
