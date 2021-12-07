import { Redirect } from 'umi';

export default (props: any) => {
  const isLogin: boolean = localStorage.getItem('__user_info__') ? true : false;
  console.log(`高阶组件 >> 判断权限 >> ${isLogin}`);
  if (isLogin) {
    return <div>{props.children} </div>;
  } else {
    return <Redirect to="/login" />;
  }
};
