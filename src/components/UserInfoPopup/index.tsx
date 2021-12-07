import { Modal } from 'antd';
import { useSelector, useDispatch } from 'umi';
const UserInfoPopup = () => {
  const { popupVisible } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Modal
      visible={popupVisible}
      onCancel={() => dispatch({ type: 'user/closeUserInfoPopup' })}
    >
      <div className={}>
        <div></div>
      </div>
    </Modal>
  );
};

export default UserInfoPopup;
