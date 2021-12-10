import { useSelector, useDispatch } from 'umi';
import { Button, Avatar, Space } from 'antd';
import {
  MenuOutlined,
  MessageOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import UserInfoPopup from '@/components/UserInfoPopup';

export default function IndexPage(props: any) {
  const userState = useSelector((state) => state.user);
  const { avatar } = userState.userInfo;
  const dispatch = useDispatch();

  const openPopup = () => {
    dispatch({
      type: 'user/openUserInfoPopup',
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.side}>
        <div className={styles.sideTop}>
          <div onClick={openPopup}>
            <Avatar shape="circle" size="large" src={avatar}></Avatar>
          </div>
          <Space className={styles.mt20} direction="vertical" size={20}>
            <Button
              type={'text'}
              icon={<MessageOutlined className={styles.fontStyle} />}
            ></Button>
            <Button
              type={'text'}
              icon={<UsergroupDeleteOutlined className={styles.fontStyle} />}
            ></Button>
          </Space>
        </div>
        <div className={styles.sideBot}>
          <Button
            type={'text'}
            icon={<MenuOutlined className={styles.fontStyle} />}
          ></Button>
        </div>
      </div>
      <div className={styles.content}>{props.children}</div>
      <UserInfoPopup />
    </div>
  );
}
