<template>
  <div class="div-container">
    <div class="div-titulo">
      <div class="titulo">
        <h2>Alertas</h2>
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
            <th scope="col">Nombre</th>
            <th scope="col">Sensor</th>
            <th scope="col">Valor desatador</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Acción</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Exceso de velocidad</td>
            <td>Velocimetro</td>
            <td>120 km/h</td>
            <td>Media</td>
            <td>Alerta plataforma</td>
            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Exceso de velocidad</td>
            <td>Velocimetro</td>
            <td>150 km/h</td>
            <td>Alta</td>
            <td>Envio correo, Alerta plataforma</td>
            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Relenti</td>
            <td>GPS, Engine On</td>
            <td>5 min</td>
            <td>Media</td>
            <td>Alerta plataforma</td>
            <td>
              <button class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#modalVerRutas">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Relenti</td>
            <td>GPS, Engine On</td>
            <td>10 min</td>
            <td>Alta</td>
            <td>Envio correo, Alerta plataforma</td>
            <td>
              <button class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#modalVerRutas">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
</template>

<script>


export default {
  components: { },
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