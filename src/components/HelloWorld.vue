<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light " >
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <img src="../assets/logocongreso.png" class="float-left" style="max-width:200px "/>
      <ul class="navbar-nav" >
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            LXIII Legislatura
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Conoce a tu diputado</a>
            <a class="dropdown-item" href="#">Fracciones Parlamentarias</a>
            <a class="dropdown-item" href="#">Composición Gráfica</a>
            <a class="dropdown-item" href="#">Mesa Directiva </a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Congreso del estado
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
            <a class="dropdown-item" href="#">¿Qué es el congreso del estado?</a>
            <a class="dropdown-item" href="#">Historia del congreso</a>
            <a class="dropdown-item" href="#">Muro de Honor</a>
            <a class="dropdown-item" href="#">Biblioteca</a>
            <a class="dropdown-item" href="#">Salón de Sesiones Plenarias</a>
            <a class="dropdown-item" href="#">Salón legisladoras</a>
            <a class="dropdown-item" href="#">Legislaturas</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Actividad Legislativa
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
            <a class="dropdown-item" href="#">Iniciativas</a>
            <a class="dropdown-item" href="#">Puntos de acuerdo</a>
            <a class="dropdown-item" href="#">Dictamenes</a>
            <a class="dropdown-item" href="#">Acuerdos Legislativos</a>
            <a class="dropdown-item" href="#">Informe de Acividades </a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Transparencia
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
            <a class="dropdown-item" href="#">Artículoo 55</a>
            <a class="dropdown-item" href="#">Artículo 57</a>
            <a class="dropdown-item" href="#">Transparencia anterior</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Prensa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">IIL</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
navbar-nav{
  margin-top: 50px;
  }

</style>
