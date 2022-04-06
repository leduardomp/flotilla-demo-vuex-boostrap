<template>
  <div class="div-container">
    <div class="div-titulo">
      <div class="titulo">
        <h2>Dashboard</h2>
        <span class="rangoFecha">Enero 2022 - Junio 2022</span>
      </div>
      <div class="tit-botones">
        <div class="tit-boton">
          <button class="btn btn-outline-info" data-toggle="modal" data-target="#modalRutas">
            <i class="bi bi-filter"></i> Filtros
          </button>
        </div>
      </div>
    </div>
    <div class="div-graficas">
      
      <div class="div-grafica">
        <h4>Consumo de gasolina</h4>
        <grafica-barras />
      </div>
      <div class="div-grafica">
        <h4>Envios por conductor</h4>
        <grafica-pastel />
      </div>
      <div class="div-grafica">
        <h4>Número de envios</h4>
        <grafica-line />
      </div>
      
    </div>
  </div>

</template>

<script>

import GraficaLine from './GraficaLine.vue';
import GraficaPastel from './GraficaPastel.vue';
import GraficaBarras from './GraficaBarras.vue';

export default {
  name:'ReporteDashboard',
  components: {GraficaBarras, GraficaPastel, GraficaLine, GraficaBarras},
};
</script>

<style>
.div-container {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
}

.div-titulo {
  margin-bottom: 2%;
  display: flex;
}

.titulo,
.tit-botones {
  display: flexbox;
  width: 50%;
}

.tit-botones {
  text-align: right;
}

.div-graficas{
  width: 100%;
  display: flex;
}

.div-grafica{
  width: 33%;
  padding: 0px 20px;
}

.rangoFecha{
  font-size: .9em;
}
</style>