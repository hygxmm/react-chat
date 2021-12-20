import { useHistory } from 'umi';
import { Row, Col, Button } from 'antd';
import s from './index.less';

const games = new Array(20).fill({ name: '坦克大战', path: '/tank' });
console.log(games);

const GamePage = () => {
  // 跳转游戏页
  const history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <div className={s.page}>
      <h1>休闲游戏</h1>
      <Row gutter={[15, 15]}>
        {games.map((item, index) => {
          return (
            <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2} key={index}>
              <Button
                type="primary"
                size="large"
                style={{ width: '100%' }}
                onClick={() => handleClick(item.path)}
              >
                {item.name}
              </Button>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default GamePage;
