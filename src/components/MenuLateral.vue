<template>
  <div class="menuDiv">
    <ul class="nav flex-column">

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
          >Administración</a
        >
        <div class="dropdown-menu">
          <router-link to="/admin/alertas">
            <a class="nav-link" href="#">Alertas</a>
          </router-link>
          <router-link to="/admin/gps">
            <a class="nav-link" href="#">GPS</a>
          </router-link>
          <router-link to="/admin/gps">
            <a class="nav-link" href="#">Operadores</a>
          </router-link>
          <router-link to="/admin/unidades">
            <a class="nav-link" href="#">Unidades</a>
          </router-link>
        </div>
      </li>

      <li class="nav-item">
        <router-link to="/">
          <a class="nav-link active" href="#">Monitoreo</a>
        </router-link>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
          >Reportes</a
        >
        <div class="dropdown-menu">
          <router-link to="/reportes/dashboard">
            <a class="nav-link" href="#">Dashboard</a>
          </router-link>
          <router-link to="/reportes/dashboard">
            <a class="nav-link" href="#">Alertas</a>
          </router-link>
          <router-link to="/reportes/dashboard">
            <a class="nav-link" href="#">GPS</a>
          </router-link>
          <router-link to="/reportes/dashboard">
            <a class="nav-link" href="#">Operador</a>
          </router-link>
          <router-link to="/reportes/dashboard">
            <a class="nav-link" href="#">Rutas</a>
          </router-link>
          <router-link to="/reportes/dashboard">
            <a class="nav-link" href="#">Unidades</a>
          </router-link>
          
        </div>
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
          <router-link to="/rutas/dia">
            <a class="nav-link" href="#">Del día</a>
          </router-link>
          <router-link to="/rutas/dia">
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