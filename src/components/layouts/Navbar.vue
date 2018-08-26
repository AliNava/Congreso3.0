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
                        <router-link class="dropdown-item" :to="{ name: 'what_is_state_congress' }">¿Qué es el congreso del estado?</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'congress_history' }">Historia del congreso</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'honor_wall' }">Muro de Honor</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'library' }">Biblioteca</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'plenary_session_hall' }">Salón de Sesiones Plenarias</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'lawmarkers_salon' }">Salón legisladoras</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'legislatures' }">Legislaturas</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actividad Legislativa
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                        <router-link class="dropdown-item" :to="{ name: 'initiatives' }">Iniciativas</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'points_of_agreement' }">Puntos de acuerdo</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'opinions' }">Dictamenes</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'activity_resports' }">Informe de Acividades </router-link>
                        <router-link class="dropdown-item" :to="{ name: 'legislatives_agreement' }">Acuerdos Legislativos</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Transparencia
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                        <router-link class="dropdown-item" :to="{ name: 'article55'}">Artículoo 55</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'article57'}">Artículo 57</router-link>
                        <router-link class="dropdown-item" :to="{ name: 'transparency_previous'}">Transparencia anterior</router-link>
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