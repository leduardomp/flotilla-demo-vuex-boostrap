<template>
  <barra-superior />
  <div class="contenido"> 
    <menu-lateral />
    <modulos-gps />
  </div>
  
</template>

<script>
import MenuLateral from '@/components/MenuLateral.vue'
import BarraSuperior from '@/components/BarraSuperior.vue'
import ModulosGps from '@/components/admin/ModulosGps.vue'


export default {
  name:'AdminAlertasView',
  components: { 
    MenuLateral, 
    BarraSuperior,
    ModulosGps
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