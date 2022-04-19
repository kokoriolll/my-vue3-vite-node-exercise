import { createRouter, createWebHashHistory } from 'vue-router';

// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: { title: 'Index' },
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      meta: { title: 'Home' },
      component: () => import('../views/home/home.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
})

export default router
