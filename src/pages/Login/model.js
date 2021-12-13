import { history } from 'umi';
import { login } from './service';

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
  },
  subscriptions: {},
};

export default LoginStore;
