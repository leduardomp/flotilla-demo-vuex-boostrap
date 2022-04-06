<template>
  <router-view></router-view>
</template>

<script>
import Principal from './views/MonitoreoView.vue'

export default {
  components: { Principal },
  name:'App'
}

</script>

<style>
html, body{
  height: 100%;
}
</style>