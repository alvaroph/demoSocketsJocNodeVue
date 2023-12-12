import { createRouter, createWebHistory } from 'vue-router'
import PortadaView from '../views/PortadaView.vue'
import JuegoView from '../views/JuegoView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PortadaView
    },
    {
      path: '/juego',
      name: 'juego',
      component: JuegoView
    }
  ]
})

export default router
