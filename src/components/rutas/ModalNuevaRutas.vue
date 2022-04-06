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
          <h2>Operador y unidad</h2>
          <div class="div-superior">
            <div class="conductor">
              <div class="combo">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Operador</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Selecciona</option>
                    <option>
                      <img src="@/assets/conductor/dummyChofer.jpeg" /> Raúl
                      Camacho
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="unidad">
              <div class="combo">
                <div class="form-group">
                  <label for="exampleFormControlSelect2">Unidad</label>
                  <select class="form-control" id="exampleFormControlSelect2">
                    <option>Selecciona</option>
                    <option>Unidad A</option>
                    <option>Unidad E</option>
                    <option>Unidad G</option>
                    <option>Unidad J</option>
                    <option>Unidad Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <h2>Rutas</h2>

          <div class="div-superior">
            <div class="conductor">
              <div class="combo">
                <div class="form-group">
                  <label for="exampleFormControlSelect3">Origen</label>
                  <select class="form-control" id="exampleFormControlSelect3">
                    <option>Selecciona</option>
                    <option>Bodega Norte DF</option>
                    <option>Bodega Sur DF</option>
                    <option>Bodega Norte Puebla</option>
                    <option>Bodega Sur Puebla</option>
                    <option>IMSS Acatitla</option>
                    <option>IMSS Zaragosa</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="unidad">
              <div class="combo">
                <div class="form-group">
                  <label for="exampleFormControlSelect4">Destino</label>
                  <select class="form-control" id="exampleFormControlSelect4">
                    <option>Selecciona</option>
                    <option>Bodega Norte DF</option>
                    <option>Bodega Sur DF</option>
                    <option>Bodega Norte Puebla</option>
                    <option>Bodega Sur Puebla</option>
                    <option>IMSS Acatitla</option>
                    <option>IMSS Zaragosa</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="div-superior">
            <div class="conductor">
              <div class="combo">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3"
                      >Hora de Salida</span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="HH:mm"
                  />
                </div>
              </div>
            </div>

            <div class="unidad">
              <div class="combo">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3"
                      >Hora de Llegada</span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="HH:mm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="div-superior">
            <button class="btn btn-outline-success"> Agregar </button>
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
}

.conductor {
  padding-right: 1.5%;
}

.unidad {
  padding-left: 1.5%;
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