## 登录注册逻辑
1. 使用(手机号+昵称+密码)注册账号;注册账号随机分配一个号码池的号码,加入默认群组中;生成token;注册成功返回用户信息;跳转主页面;
2. 使用(手机号|账号|昵称)登录;返回登录信息;跳转主页面
3. 使用token登录;返回登录信息;
4. 登录状态才允许连接socket,否则跳转登录页,断开socket连接
5. 主页面从本地缓存中读取联系人列表数据
6. 获取联系人列表的最新数据
7. 


## 监听事件


## 




2. 
3. 
4. 
5. 
6. 