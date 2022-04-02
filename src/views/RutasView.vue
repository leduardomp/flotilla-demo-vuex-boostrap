<template>
  <barra-superior />
  <div class="contenido"> 
    <menu-lateral />
    <rutas />
  </div>
  
</template>

<script>
import MenuLateral from '@/components/MenuLateral.vue'
import BarraSuperior from '@/components/BarraSuperior.vue'
import Rutas from '@/components/Rutas.vue'

export default {
  name:'RutasView',
  components: { 
    MenuLateral, 
    BarraSuperior, 
    Rutas 
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