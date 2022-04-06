<template>
  <div class="unidades">
    <camion titulo="Unidad B" classItem="icono-camion-alert" data-toggle="modal" data-target="#modalCamion" />
    <camion titulo="Unidad A" classItem="icono-camion-ok" />
    <camion titulo="Unidad C" classItem="icono-camion-none" />
    <camion titulo="Unidad D" classItem="icono-camion-none" />
  </div>
  <modal-camion idElemento="modalCamion"/>
</template>

<script>
import Camion from './Camion.vue';
import ModalCamion from './ModalCamion.vue';

export default {
  name: "BarraUnidades",
  components:{
    Camion,
    ModalCamion
  },
  methods:{
  }
    
};
</script>

<style>
.unidades {
  display: flexbox;
  width: 200px;
  height: 100%;
  background-color: whitesmoke;
}
</style>