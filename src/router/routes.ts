import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/override',
        component: () => import('src/pages/OverridePage.vue'),
      },
      {
        path: '/header',
        component: () => import('src/pages/HeaderPage.vue'),
      },
      {
        path: '/navbar',
        component: () => import('src/pages/NavbarPage.vue'),
      },
      {
        path: '/news',
        component: () => import('src/pages/NewsPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
