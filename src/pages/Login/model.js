import { history } from 'umi';
import { message } from 'antd';

import { login, register } from './service';

const LoginStore = {
  namespace: 'login',
  state: {
    mobile: '',
    password: '',
  },
  reducers: {},
  effects: {
    *login({ payload }, { put, call }) {
      const { data } = yield call(login, payload);
      console.log('login', data);
      yield put({ type: 'user/updateUserInfo', payload: data });
      history.replace('/');
    },
    *register({ payload }, { put, call }) {
      const { data: result } = yield call(register, payload);
      console.log('register', result);
      const { code, data, msg } = result;
      if (code == 0) {
        message.success(msg);
        yield put({ type: 'user/updateUserInfo', payload: data });

        yield put({
          type: 'user/updateLinkmans',
          payload: { groups: [data.defaultGroup] },
        });

        history.replace('/');
      } else {
        message.error(msg);
      }
    },
  },
  subscriptions: {},
};

export default LoginStore;
