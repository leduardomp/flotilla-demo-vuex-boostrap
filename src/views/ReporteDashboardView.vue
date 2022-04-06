<template>
  <barra-superior />
  <div class="contenido"> 
    <menu-lateral />
    <reporte-dashboard />
  </div>
  
</template>

<script>
import MenuLateral from '@/components/MenuLateral.vue'
import BarraSuperior from '@/components/BarraSuperior.vue'
import ReporteDashboard from '@/components/reportes/ReporteDashboard.vue'

export default {
  name:'RutasView',
  components: { 
    MenuLateral, 
    BarraSuperior, 
    ReporteDashboard
  },
}
</script>

<style>
.contenido{
  display: flex;
  width: 100%;
  height: calc(100vh - 58px);
}
</style>