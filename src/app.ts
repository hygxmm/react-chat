import type { RequestConfig } from 'umi';

export const request: RequestConfig = {
  prefix: 'http://127.0.0.1:7001/',
  timeout: 5000, // 请求超时
  requestInterceptors: [
    (url, options) => {
      const userInfo = localStorage.getItem('__user_info__');
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: '',
      };
      if (userInfo) {
        headers.Authorization = JSON.parse(userInfo).token;
      }
      return {
        url,
        options: { ...options, headers },
      };
    },
  ], // 请求拦截器
  responseInterceptors: [], // 响应拦截器
};
