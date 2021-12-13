import { request } from 'umi';

export function changeAvatar(data) {
  return request('api/user/changeAvatar', { data: data, method: 'POST' });
}
