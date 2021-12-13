import { changeAvatar } from '@/services';
const UserStore = {
  namespace: 'user',
  state: {
    userInfo: null,
    token: '',
    popupVisible: false,
  },
  reducers: {
    initApp(state) {
      const userInfoStr = localStorage.getItem('__chat_user_info__');
      let userInfo = null;
      let token = '';
      if (userInfoStr) {
        try {
          userInfo = JSON.parse(userInfoStr);
          token = userInfo.token;
        } catch (error) {
          console.log(error);
        }
      }
      console.log('initApp', userInfo);
      return {
        ...state,
        userInfo,
        token,
      };
    },
    updateUserInfo(state, { payload }) {
      localStorage.setItem('__chat_user_info__', JSON.stringify(payload));
      return {
        ...state,
        userInfo: payload,
        token: payload.token,
      };
    },
    removeUserInfo(state) {
      localStorage.removeItem('__chat_user_info__');
      return {
        ...state,
        userInfo: null,
        token: '',
      };
    },
    openUserInfoPopup(state) {
      return {
        ...state,
        popupVisible: true,
      };
    },
    closeUserInfoPopup(state) {
      return {
        ...state,
        popupVisible: false,
      };
    },
  },
  effects: {
    *login() {},
    /**
     * 修改用户头像
     */
    *changeAvatar({ payload }, { call }) {
      try {
        const { code, data, msg } = yield call(changeAvatar, payload);
        console.log(`${code}`, data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('userInfo setup', history);
      dispatch({ type: 'initApp' });
    },
  },
};

export default UserStore;
