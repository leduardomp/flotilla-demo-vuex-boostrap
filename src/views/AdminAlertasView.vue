<template>
  <barra-superior />
  <div class="contenido"> 
    <menu-lateral />
    <alertas />
  </div>
  
</template>

<script>
import MenuLateral from '@/components/MenuLateral.vue'
import BarraSuperior from '@/components/BarraSuperior.vue'
import Alertas from '@/components/admin/Alertas.vue'


export default {
  name:'AdminAlertasView',
  components: { 
    MenuLateral, 
    BarraSuperior,
    Alertas, 
    
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