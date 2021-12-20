export default [
  { path: '/tank', component: '@/pages/games/Tank/index' },
  { path: '/login', component: '@/pages/Login/index' },
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
];
