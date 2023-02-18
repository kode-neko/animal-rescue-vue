import { createRouter, createWebHistory } from 'vue-router'
import FrameView from '../views/frame/FrameView.vue'
import LoginView from '../views/frame/LoginView.vue'
import MasterView from '../views/MasterView.vue'
import CreateView from '../views/CreateView.vue'
import EditView from '../views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrameView,
      children: [
        {
          path: '/',
          name: 'master',
          component: MasterView
        },
        {
          path: '/create',
          name: 'create',
          component: CreateView
        },
        {
          path: '/edit:id',
          name: '/edit',
          component: EditView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
