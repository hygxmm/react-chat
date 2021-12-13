import {
  ErrorHandler,
  requestInterceptor,
  responseInterceptor,
} from '@/utils/request-middleware';

// 统一配置请求方法
export const request = {
  prefix: 'http://127.0.0.1:7001/',
  timeout: 5000, // 请求超时
  getResponse: true,
  requestInterceptors: [requestInterceptor], // 请求拦截器
  responseInterceptors: [responseInterceptor], // 响应拦截器
  errorHandler: ErrorHandler,
  errorConfig: {
    adaptor: (resData) => {
      console.log();
      return {
        ...resData,
        success: resData.code,
        errorMessage: resData.message,
      };
    },
  },
};
