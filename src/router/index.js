import { createRouter, createWebHashHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
import RutasView from '../views/RutasView.vue'

const routes = [
  {
    path: '/',
    name: 'principal',
    component: PrincipalView
  },
  {
    path: '/rutas',
    name: 'rutas',
    component: RutasView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
