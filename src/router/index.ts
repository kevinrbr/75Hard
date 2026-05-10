import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue')
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/views/ProgressView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/views/AddView.vue')
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import('@/views/GoalsView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('@/views/TasksView.vue')
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: () => import('@/views/WeeklyGoalsView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    }
  ],
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' })
})

export default router
