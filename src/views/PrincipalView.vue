<template>
  <barra-superior />
  <div class="contenido"> 
    <menu-lateral />
    <mapa />
  </div>
  
</template>

<script>
import MenuLateral from '@/components/MenuLateral.vue'
import BarraSuperior from '@/components/BarraSuperior.vue'
import Mapa from '@/components/Mapa.vue'

export default {
  components: { MenuLateral, BarraSuperior, Mapa },
}
</script>

<style>
.contenido{
  display: flex;
  width: 100%;
  height: calc(100vh - 58px);
}
</style>