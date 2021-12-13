import { request } from 'umi';

export function login(data) {
  return request('api/user/login', { data: data, method: 'POST' });
}
