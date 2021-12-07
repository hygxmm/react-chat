import { request } from 'umi';

export function login(data: { mobile: string; password: string }) {
  return request('api/user/login', { data: data, method: 'POST' });
}
