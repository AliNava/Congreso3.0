<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light " >
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <router-link :to="{ name:'home' }">
                <img src="../../assets/img/logocongreso.png" class="float-left" style="max-height:75px "/>
            </router-link>
            <ul class="navbar-nav mx-auto" >
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        LXIII Legislatura
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link class="dropdown-item" :to="{ name: 'know_your_deputy' }">Conoce a tu diputado</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'parliamentary_fractions' }">Fracciones Parlamentarias</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'graphic_composition' }">Composición Gráfica</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'board_of_directors' }">Mesa Directiva</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
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
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <li class="nav-item h-b-reed" >
                    <a class="nav-link" href="#">Prensa</a>
                </li>
                <li class="nav-item h-b-reed">
                    <a class="nav-link" href="#">IIL</a>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

    .dropdown-toggle:hover ~ .dropdown-menu{
        display: block;
    }
    .dropdown-menu:hover{
        display: block;
    }
    .dropdown-item:hover{
        color: #428bca ;
    }
</style>