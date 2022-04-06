<template>
  <div class="container-camion"> 
      <div :class="classItem"></div>
      <div class="container-titulo"><span class="titulo">{{titulo}}</span> </div>
  </div>
</template>

<script>
export default {
    name:'Camion',
    props:{
        titulo:String,
        classItem:String
    }
}
</script>

<style scoped>
.container-camion{
    width: 100%;
    height: 50px;
    background-color: azure;
    padding: 10px;
    display: flex;
}

.icono-camion-none{
    display: flexbox;
    background-image: url("@/assets/camion.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: auto;
    width: 30px;
    cursor: pointer;
}

.icono-camion-ok{
    display: flexbox;
    background-image: url("@/assets/camion_ok.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: auto;
    width: 30px;
    cursor: pointer;
}

.icono-camion-alert{
    display: flexbox;
    background-image: url("@/assets/camion_alert.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: auto;
    width: 30px;
    cursor: pointer;
}

.container-titulo{
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
}

.titulo{
    padding-left: 3%;
}
</style>