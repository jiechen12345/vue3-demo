// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import NotFoundPage from '../view/NotFoundPage.vue';
// import AAPage from '../view/AAPage.vue';
// import BBPage from '../view/BBPage.vue';
// import CCPage from '../view/CCPage.vue';
// import DDPage from '../view/DDPage.vue';
// import EEPage from '../view/EEPage.vue';

// Vue.use(VueRouter);

// const routes = [
//   { path: '/', redirect: '/aa' },
//   { path: '/aa', component: AAPage },
//   { path: '/bb', component: BBPage },
//   { path: '/cc', component: CCPage },
//   { path: '/dd', component: DDPage },
//   { path: '/ee', component: EEPage },
//   { path: '*', component: NotFoundPage },
// ];

// const router = new VueRouter({
//   mode: 'history',
//   routes,
// });
// export default router;
import { createRouter, createWebHistory } from 'vue-router';
import NotFoundPage from '../view/NotFoundPage.vue';
import AAPage from '../view/AAPage.vue';
import BBPage from '../view/BBPage.vue';
import CCPage from '../view/CCPage.vue';
import DDPage from '../view/DDPage.vue';
import EEPage from '../view/EEPage.vue';
import Detail from '@/view/Detail.vue';

const routes = [
  { path: '/', redirect: '/aa' },
  { path: '/aa', component: AAPage },
  { path: '/bb', component: BBPage, meta: { keepAlive: true } },
  { path: '/cc', component: CCPage },
  { path: '/dd', component: DDPage },
  { path: '/ee', component: EEPage },
  { path: '/detail/:poName', component: Detail, name: 'detail' },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }, // Vue 3 中的404頁面匹配方式
];

const router = createRouter({
  history: createWebHistory(), // 使用HTML5 history模式
  routes,
});

export default router;
