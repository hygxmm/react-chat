export default [
  {
    path: '/',
    component: '@/pages/index',
    wrappers: ['@/wrappers/auth'],
  },
  { path: '/login', component: '@/pages/Login/index' },
];
