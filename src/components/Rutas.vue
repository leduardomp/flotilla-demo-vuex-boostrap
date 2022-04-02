<template>
  <div class="div-container">
    <div class="div-titulo">
      <div class="titulo">
        <h2>Rutas del dia</h2>
      </div>
      <div class="tit-botones">
        <div class="tit-boton">
          <button class="btn btn-outline-success" data-toggle="modal" data-target="#modalRutas">
            <i class="bi bi-plus-square-fill"></i> crear
          </button>
        </div>
      </div>
    </div>
    <div class="divTabla">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Origen</th>
            <th scope="col">Destino</th>
            <th scope="col">Multidestino</th>
            <th scope="col">Hora de salida</th>
            <th scope="col">Hora de llegada</th>
            <th scope="col">Conductor</th>
            <th scope="col">Núm unidad</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bodega Norte</td>
            <td>IMSS Zaragoza</td>
            <td>No</td>
            <td>11:00</td>
            <td>12:30</td>
            <td>Luis Martinez</td>
            <td>Unidad B</td>
            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bodega Norte</td>
            <td>IMSS Puebla</td>
            <td>No</td>
            <td>11:00</td>
            <td>15:30</td>
            <td>Raúl Lopez</td>
            <td>Unidad C</td>
            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bodega Sur</td>
            <td>Bodega Norte</td>
            <td>Si</td>
            <td>09:00</td>
            <td>16:30</td>
            <td>Carlos Betancurt</td>
            <td>Unidad D</td>
            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <modal-rutas idElemento="modalRutas"/>
</template>

<script>
import ModalRutas from './ModalRutas.vue';

export default {
  components: { ModalRutas },
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
</style>