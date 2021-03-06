import { message } from 'antd';
import {
  changeAvatar,
  changeUsername,
  changePassword,
  getLinkmansLastMessage,
} from '@/services';
import _ from 'lodash';
import { createLinkmanId } from '@/utils/utils';
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
    setLinkman(state, { payload }) {
      const linkmanStr = localStorage.getItem('__chat_linkman__');
      const linkmans = [];
      if (linkmanStr) {
        try {
          linkmans.push(...JSON.parse(linkmanStr));
        } catch (error) {}
      }
      console.log();

      // localStorage.setItem('__chat_user_info__', JSON.stringify(payload));
      return {
        ...state,
      };
    },
  },
  effects: {
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
    *changeUsername({ payload }, { call, put, select }) {
      try {
        const { data: result } = yield call(changeUsername, payload);
        const { code, data, msg } = result;
        if (code === 0) {
          message.success('修改成功');
          const { userInfo: info } = yield select((state) => state.user);
          const newInfo = _.assign(_.clone(info), payload);
          yield put({ type: 'updateUserInfo', payload: newInfo });
        } else {
          message.error(msg);
        }
      } catch (error) {
        console.error(error);
      }
    },
    *changePassword({ payload }, { call, put, select }) {
      const { password, password2 } = payload;
      if (!_.trim(password)) return message.error('请输入旧密码');
      if (!_.trim(password2)) return message.error('请输入新密码');
      if (_.trim(password) === _.trim(password2))
        return message.error('新密码与旧密码一致');
      try {
        const { data: result } = yield call(changePassword, {
          oldPassword: password,
          newPassword: password2,
        });
        const { code, data, msg } = result;
        if (code === 0) {
          message.success('修改成功');
          // yield put();
        } else {
          message.error(msg);
        }
        console.log(code, data, msg);
      } catch (error) {
        console.error(error);
      }
    },
    *updateLinkmans({ payload }, { call, put, select }) {
      const { groups, friends } = payload;
      const linkmans = [];
      if (Array.isArray(groups)) {
        groups.forEach((group) => {
          Object.assign(group, {
            type: 'group',
            unread: 0,
            messages: [],
          });
        });
        linkmans.push(...groups);
      }
      if (Array.isArray(friends)) {
        friends.forEach((friend) => {
          Object.assign(friend, {
            type: 'friend',
            _id: createLinkmanId(friend.from, friend.to._id),
            messages: [],
            unread: 0,
            avatar: friend.to.avatar,
            name: friend.to.name,
            to: friend.to._id,
          });
        });
        linkmans.push(...friends);
      }
      const linkmanIds = [...linkmans.map((l) => l._id)];
      const { data: result } = yield call(getLinkmansLastMessage, {
        linkmans: linkmanIds,
      });
      console.log('getLinkmansLastMessage', result);
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
