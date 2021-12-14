import {
  adaptor,
  ErrorHandler,
  requestInterceptor,
  responseInterceptor,
} from '@/utils/request-middleware';

const isDev = () => process.env.NODE_ENV === 'development';

// 统一配置请求方法
export const request = {
  prefix: isDev() ? 'http://127.0.0.1:7001/' : 'http://192.168.12.134:7001/',
  timeout: 6000, // 请求超时
  getResponse: true,
  requestInterceptors: [requestInterceptor], // 请求拦截器
  responseInterceptors: [responseInterceptor], // 响应拦截器
  errorHandler: ErrorHandler,
  errorConfig: { adaptor },
};
