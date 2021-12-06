import React from 'react';
// import Umi from 'umi';
import dva from 'dva';
import { Card, Form } from 'antd';

import styles from './index.less';

console.log('react', React);
console.log('dva', dva);

const LoginPage = (props) => {
  console.log('props', props);
  return (
    <div className={styles.page}>
      <Card>
        <Form></Form>
      </Card>
    </div>
  );
};

export default LoginPage;
