import { createRouter, createWebHashHistory } from 'vue-router'


import AdminAlertasView from '../views/AdminAlertasView.vue'
import AdminGPSView from '../views/AdminGPSView.vue'
import AdminUnidadesView from '../views/AdminUnidadesView.vue'

import MonitoreoView from '../views/MonitoreoView.vue'

import ReporteDashboardView from '../views/ReporteDashboardView.vue'

import RutasView from '../views/RutasView.vue'


const routes = [
  {
    path: '/',
    name: 'monitoreo',
    component: MonitoreoView
  },
  {
    path: '/rutas/dia',
    name: 'rutasDia',
    component: RutasView
  },
  {
    path: '/reportes/dashboard',
    name: 'reporteDashboard',
    component: ReporteDashboardView
  },
  {
    path: '/admin/alertas',
    name: 'adminAlertas',
    component: AdminAlertasView
  },
  {
    path: '/admin/gps',
    name: 'adminGPS',
    component: AdminGPSView
  },
  {
    path: '/admin/unidades',
    name: 'adminUnidades',
    component: AdminUnidadesView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
