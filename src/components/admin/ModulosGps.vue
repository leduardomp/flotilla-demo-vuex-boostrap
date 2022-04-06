<template>
  <div class="div-container">
    <div class="div-titulo">
      <div class="titulo">
        <h2>Modulos GPS</h2>
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
            <th scope="col">Modelo</th>
            <th scope="col">Fecha compra</th>
            <th scope="col">Marca Sim</th>
            <th scope="col"># Sim</th>
            <th scope="col"># Telefonico</th>
            <th scope="col">Ultima recarga</th>
            <th scope="col">Monto recarga</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>PH-0000001</td>
            <td>Ruptela</td>
            <td>FM-Tco4 HCV</td>
            <td>22/03/2022</td>
            <td>Telcel</td>
            <td>8952140061827387348G</td>
            <td>55 5650 4040</td>
            <td>25/03/2022</td>
            <td>$100.00</td>
            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>PH-0000002</td>
            <td>Ruptela</td>
            <td>FM-Tco4 HCV</td>
            <td>22/03/2022</td>
            <td>Telcel</td>
            <td>8952140061827387349G</td>
            <td>55 5650 4089</td>
            <td>25/03/2022</td>
            <td>$100.00</td>
            <td>
              <button class="btn btn-outline-info btn-sm">
                <i class="bi bi-info-square-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>PH-0000003</td>
            <td>Ruptela</td>
            <td>FM-Tco4 HCV</td>
            <td>22/03/2022</td>
            <td>Telcel</td>
            <td>8952140061827387350G</td>
            <td>55 5650 4037</td>
            <td>25/03/2022</td>
            <td>$100.00</td>
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