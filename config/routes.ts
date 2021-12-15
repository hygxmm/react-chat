export default [
  {
    path: '/',
    component: '@/pages/index',
    wrappers: ['@/wrappers/auth'],
    routes: [
      { path: 'chat', component: '@/pages/chat/index' },
      { path: 'games', component: '@/pages/games/index' },
      { redirect: '/chat' },
    ],
  },
  { path: '/login', component: '@/pages/Login/index' },
];
