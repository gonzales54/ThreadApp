import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index';

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/:catchAll(.*)', 
    name: 'not-found', 
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: 'popular_thread',
        name: 'popular_thread',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'recent_thread',
        name: 'recent_thread',
        component: () => import('../views/HomeView.vue'),
      },     
    ]
  },
  {
    path: '/tags/:id',
    name: 'tag',
    component: () => import('../views/TagView.vue'),
    props: true,
    children: [
      {
        path: 'tag_popular_thread',
        name: 'tag_popular_thread',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'tag_recent_thread',
        name: 'tag_recent_thread',
        component: () => import('../views/HomeView.vue'),
      },      
    ]
  },
  {
    path: '/thread/:id',
    name: 'thread_detail',
    component: () => import('../views/ThreadDetail.vue'),
    props: true,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/user',
    children: [
      {
        path: 'userdetail',
        name: 'userdetail',
        component: () => import('../views/UserDetail.vue'),
        async beforeEnter(to, from, next) {
          await store.dispatch('getUser')
          if(store.state.loginCheck) {
            next()
          } else {
            next({
              path: '/login',
              query: {
                redirect: to.fullPath,
              }
            })
          }
        }
      },  
      {
        path: 'createthread',
        name: 'createthread',
        component: () => import('../views/CreateThread.vue'),
        async beforeEnter(to, from, next) {
          await store.dispatch('getUser')
          if(store.state.loginCheck) {
            next()
          } else {
            next({
              path: '/login',
              query: {
                redirect: to.fullPath,
              }
            })
          }
        }
      },  
      {
        path: 'userupdate',
        name: 'userupdate',
        component: () => import('../views/UserUpdate.vue'),
        async beforeEnter(to, from, next) {
          await store.dispatch('getUser')
          if(store.state.loginCheck) {
            next()
          } else {
            next({
              path: '/login',
              query: {
                redirect: to.fullPath,
              }
            })
          }
        }
      },  
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
