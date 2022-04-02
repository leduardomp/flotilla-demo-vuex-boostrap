<template>
  <div
    class="modal fade"
    :id="idElemento"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Nueva ruta</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="div-superior">
            <div class="conductor">
              <div class="tit">Conductor</div>
              <div class="combo">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Selecciona
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>

              </div>
            </div>
            <div class="unidad"></div>
          </div>
          <div class="div-rutas">
            <div class="titulo-tabla">Rutas a cumplir</div>
            <div class="tabla-rutas">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Origen</th>
                    <th scope="col">Destino</th>
                    <th scope="col">Hora de salida</th>
                    <th scope="col">Hora de llegada</th>
                    <th scope="col">Quitar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Bodega Norte</td>
                    <td>IMSS Zaragoza</td>
                    <td>11:00</td>
                    <td>12:30</td>
                    <td>
                      <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-file-x-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Bodega Norte</td>
                    <td>IMSS Puebla</td>
                    <td>11:00</td>
                    <td>15:30</td>
                    <td>
                      <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-file-x-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Bodega Sur</td>
                    <td>Bodega Norte</td>
                    <td>09:00</td>
                    <td>16:30</td>
                    <td>
                      <button class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-file-x-fill"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success">Guardar</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCamion",
  props: {
    idElemento: String,
  },
  methods: {},
};
</script>

<style scoped>
.div-superior {
  width: 100%;
  display: flex;
}

.conductor,
.unidad {
  width: 50%;
  border: 1px solid red;
}

.tit,
.combo {
  width: 100%;
  display: block;
}

.titulo-tabla {
  font-size: 1.3em;
  margin-top: 3%;
}
</style>