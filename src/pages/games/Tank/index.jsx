import { useState } from 'react';
import { Card, Button, Space } from 'antd';
import s from './index.less';

const TankGame = () => {
  // 游戏状态 init
  const [gameStatus, setGameStatus] = useState('init');
  //

  if (gameStatus === 'init') {
    return (
      <div className={s.initPage}>
        <Card className={s.container}>
          <Space direction={'vertical'}>
            <Button type={'primary'}>随机匹配</Button>
            <Button type={'primary'}>人机对战</Button>
            <Button type={'primary'}>开房间</Button>
          </Space>
        </Card>
      </div>
    );
  }
  return <div>暂未实现</div>;
};

export default TankGame;
