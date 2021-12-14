import { request } from 'umi';
/**
 * 修改用户头像
 * @param {*} data {avatar} 新头像地址
 * @returns
 */
export function changeAvatar(data) {
  return request('api/user/changeAvatar', { data: data, method: 'POST' });
}

/**
 * 修改用户昵称
 * @param {*} data {username} 新昵称
 * @returns
 */
export function changeUsername(data) {
  return request('api/user/changeUsername', { data: data, method: 'POST' });
}

/**
 * 修改用户密码
 * @param {*} data {oldPassword} 旧密码
 * @param {*} data {newPassword} 新密码
 * @returns
 */
export function changePassword(data) {
  return request('api/user/changePassword', { data: data, method: 'POST' });
}
