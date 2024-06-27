import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CompareView from '@/views/CompareView.vue'
import HotelBooking from '@/views/HotelBooking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/compare',
      name: 'compare',
      component: CompareView
    },
    {
      path: '/booking',
      name: 'booking',
      component: HotelBooking
    }
  ]
})

export default router
