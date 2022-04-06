<template>
  <barra-superior />
  <div class="contenido"> 
    <menu-lateral />
    <unidades />
  </div>
  
</template>

<script>
import MenuLateral from '@/components/MenuLateral.vue'
import BarraSuperior from '@/components/BarraSuperior.vue'
import Unidades from '@/components/admin/Unidades.vue'


export default {
  name:'AdminAlertasView',
  components: { 
    MenuLateral, 
    BarraSuperior,
    Unidades
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