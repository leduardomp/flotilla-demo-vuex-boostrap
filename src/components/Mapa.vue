<template>
  <div class="divMapa">
    <div class="mapa">
      <iframe
        width="350"
        height="300"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        class="styleMapa"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-99.09900221857245%2C19.399828184812755%2C-99.02733359369452%2C19.435809827752326&amp;layer=mapnik&amp;marker=19.417820001951352%2C-99.06316790613346"
      >
      </iframe>
    </div>
    <barra-unidades />
  </div>
</template>

<script>
import BarraUnidades from './BarraUnidades.vue';
export default {
  components: { BarraUnidades },
  name: "Mapa",
};
</script>

<style scoped>
.divMapa {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: silver;
}

.mapa {
  display: flexbox;
  height: 100%;
  width: calc(100% - 200px);
}

.styleMapa{
  width: 100%;
  height: 100%;
}


</style>