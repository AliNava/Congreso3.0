<template>
    <div class="bg">
        <div>
            <img src="../assets/img/bannerIndex.jpg" class="img-fluid" alt="first image">
        </div>
        <div class="container">
            <div class="row">
                <!--carrousel-->
                <div id="carouselExampleIndicators" class="carousel slide col-sm-8" data-ride="carousel">
                    <ol class="carousel-indicators row">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="../assets/img/GetFileFromPathComplete006b.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../assets/img/GetFileFromPathCompletee22d.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../assets/img/GetFileFromPathCompletef330.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <!-- visitas-->
                <div class="h4 col-2 text-lg-center text-dark font-weight-bold">
                    Eres nuestro visitante no.
                    <div>
                        <a href="https://www.contadorvisitasgratis.com" title="contador para pagina web"><img src="https://counter4.whocame.ovh/private/contadorvisitasgratis.php?c=1myl2ndjqehk62tmsp926st327zxwyqx" border="0" title="contador para pagina web" alt="contador para pagina web"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./layouts/Sidebar";
    export default {
      name: 'Home',
        components: {Sidebar}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .carousel slide {
        height: 100%;
    }
    .bg {
        background-image: url("../assets/img/clean-2721103_1920.jpg") ;
        background-repeat: no-repeat;
    }
</style>
