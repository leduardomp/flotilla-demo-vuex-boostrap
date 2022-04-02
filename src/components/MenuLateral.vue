<template>
  <div class="menuDiv">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/">
          <a class="nav-link active" href="#">Monitoreo</a>
        </router-link>
      </li>
      <li class="nav-item"></li>
      <li class="nav-item">
        <a class="nav-link" href="#">Reportes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Administración</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
          >Rutas</a
        >
        <div class="dropdown-menu">
          <router-link to="/rutas">
            <a class="nav-link" href="#">Del día</a>
          </router-link>
          <router-link to="/rutas">
            <a class="nav-link" href="#">Programadas</a>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuLateral",
};
</script>

<style>
.menuDiv {
  display: flexbox;
  width: 150px;
  height: 100%;
  border-right: 1px solid snow;
}
</style>