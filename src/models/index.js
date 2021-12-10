const GlobalStore = {
  namespace: 'global',
  state: {
    user: null, // 用户信息
    focus: '', // 页面显示状态
    connected: false, // websocket连接状态
    primaryColor: '', // 主题色
    isBeep: true, // 是否开启提示音
    isNotification: true, // 是否开启桌面通知
  },
  reducers: {
    /**
     * 退出登录
     * @param {*} state
     */
    logout(state) {},
  },
  effects: {
    *login() {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log('global setup', history);
      //   dispatch({ type: 'initApp' });
    },
  },
};

export default GlobalStore;
