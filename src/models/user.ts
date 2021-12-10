import type { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import type { Model } from 'dva';

const UserStore = {
  namespace: 'user',
  state: {
    userInfo: null,
    token: '',
    popupVisible: false,
  },
  reducers: {
    initApp(state) {
      const userInfoStr = localStorage.getItem('__user_info__');
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
      return {
        ...state,
        userInfo,
        token,
      };
    },
    updateUserInfo(state, { payload }) {
      localStorage.setItem('__user_info__', JSON.stringify(payload));
      return {
        ...state,
        userInfo: payload,
        token: payload.token,
      };
    },
    removeUserInfo(state) {
      localStorage.removeItem('__user_info__');
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
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('userInfo setup', history);
      dispatch({ type: 'initApp' });
    },
  },
};

export default UserStore;
