import s from './index.less';
import Linkman from './Linkman';
const ChatPage = () => {
  return (
    <div className={s.container}>
      <div className={s.side}>
        <Linkman />
      </div>
      <div className={s.main}></div>
    </div>
  );
};

export default ChatPage;
