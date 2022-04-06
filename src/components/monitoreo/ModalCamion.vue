<template>
  <div
    class="modal fade"
    :id="idElemento"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Unidad B</h5>
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
          <div class="contenedor">
            <div class="conductor">
              <div class="foto">
                <img
                  src="@/assets/conductor/dummyChofer.jpeg"
                  alt="chofer"
                  class="chofer"
                />
              </div>

              <div class="datos-conductor">
                <div class="nombre">
                  <span>Luis Martínez</span>
                </div>
                <div class="contacto">
                  <span>Telefono:</span><span> 55-5555-5555</span>
                </div>
                <div class="contacto">
                  <span>Número empleado:</span><span> CH-009813 </span>
                </div>
              </div>
            </div>

            <div class="seccion">
              <h3>Ruta</h3>
              <div class="ruta">
                <div class="datos-ruta">
                  <span class="dato-ruta-1">Origen:</span>
                  <span>Bodega norte</span>
                </div>
                <div class="datos-ruta">
                  <span class="dato-ruta-1">Destino:</span>
                  <span>IMSS Zaragosa</span>
                </div>
              </div>
              <div class="ruta">
                <div class="datos-ruta">
                  <span class="dato-ruta-1">Salida programada:</span>
                  <span>11:00</span>
                </div>
                <div class="datos-ruta">
                  <span class="dato-ruta-1">Llegada programada:</span>
                  <span>12:30</span>
                </div>
              </div>
            </div>

            <div class="seccion">
              <h3>Alertas en ruta</h3>
              <div class="alertas">
                <div class="datos-alerta">
                  <div>
                    <span class="dato-ruta-1">Relenti:</span>
                    <span>20 min </span>
                  </div>
                  <div>
                    <span class="dato-ruta-1">Inicio:</span>
                    <span>11:00 - lat:12343.34, long:12331.3</span>
                  </div>
                  <div>
                    <span class="dato-ruta-1">Finalizo:</span>
                    <span>11:20 - lat:12343.34, long:12331.3</span>
                  </div>
                </div>
                <div class="datos-alerta">
                  <div>
                    <span class="dato-ruta-1">Exceso de velocidad:</span>
                    <span>130 km/h </span>
                  </div>
                  <div>
                    <span class="dato-ruta-1">Inicio:</span>
                    <span>11:30 - lat:12343.34, long:12331.3</span>
                  </div>
                  <div>
                    <span class="dato-ruta-1">Finalizo:</span>
                    <span>11:50 - lat:12332.34, long:123211.3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning">Apertura de puerta</button>
          <button type="button" class="btn btn-info">Llamar</button>
          <button type="button" class="btn btn-primary">Hoja Porte</button>
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

<style>
.contenedor {
}

.seccion {
  margin-top: 5%;
  border-top: 1px solid silver;
}

.conductor {
  display: flex;
}

.foto,
.datos-conductor {
  display: flexbox;
}

.chofer {
  width: 80px;
  height: 100px;
}

.datos-conductor {
  padding-left: 5%;
}

.nombre{
  font-size: 1.5em;
  font-weight: 500;
}

.ruta {
  margin-top: 1%;
  display: flex;
}

.datos-ruta {
  display: flexbox;
  margin-right: 5%;
}

.dato-ruta-1 {
  font-weight: bold;
}

.datos-alerta{
  margin-bottom: 5%;
}
</style>