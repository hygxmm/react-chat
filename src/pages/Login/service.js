import { request } from 'umi';

export function login(data) {
  return request('api/user/login', { data: data, method: 'POST' });
}

export function register(data) {
  return request('api/user/register', { data: data, method: 'POST' });
}
