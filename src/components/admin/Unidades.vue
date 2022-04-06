<template>
  <div class="div-container">
    <div class="div-titulo">
      <div class="titulo">
        <h2>Unidades</h2>
      </div>
      <div class="tit-botones">
        <div class="tit-boton">
          <button class="btn btn-outline-success" data-toggle="modal" data-target="#modalGPSs">
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

            <th scope="col"># Inventario</th>
            <th scope="col">Marca</th>
            <th scope="col">Submarca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Fecha compra</th>
            <th scope="col">Placas</th>
            <th scope="col">Periodo verificación</th>
            <th scope="col">Ultima verificación</th>
            <th scope="col">Ultimo servicio</th>
            <th scope="col">Compra llantas</th>
            <th scope="col">Kilometro recorridos</th>

            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            
            <th scope="col">PHUN-00001</th>
            <th scope="col">Volkswagen</th>
            <th scope="col">Transporter</th>
            <th scope="col">2020</th>
            <th scope="col">01/10/2019</th>
            <th scope="col">CL-MKS-09</th>
            <th scope="col">Mayo-Junio</th>
            <th scope="col">10-Novimbre-2021</th>
            <th scope="col">03/02/2022</th>
            <th scope="col">01/10/2019</th>
            <th scope="col">80,000</th>

            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>

            <th scope="col">PHUN-00002</th>
            <th scope="col">Volkswagen</th>
            <th scope="col">Transporter</th>
            <th scope="col">2020</th>
            <th scope="col">01/10/2019</th>
            <th scope="col">CL-MFZ-09</th>
            <th scope="col">Mayo-Junio</th>
            <th scope="col">10-Novimbre-2021</th>
            <th scope="col">03/02/2022</th>
            <th scope="col">01/10/2019</th>
            <th scope="col">81,000</th>

            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>

            <th scope="col">PHUN-00003</th>
            <th scope="col">Volkswagen</th>
            <th scope="col">Transporter</th>
            <th scope="col">2021</th>
            <th scope="col">01/10/2020</th>
            <th scope="col">ZY-ALM-09</th>
            <th scope="col">Mayo-Junio</th>
            <th scope="col">10-Novimbre-2020</th>
            <th scope="col">03/02/2022</th>
            <th scope="col">01/10/2020</th>
            <th scope="col">20,000</th>

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
  name:'GPSs',
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