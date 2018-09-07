<template>
    <div>
       <Gabinets/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3 class="section-heading text-uppercase font-weight-bold">
                        Conoce a los diputados
                    </h3>
                    <h4 class="text-lg-center h6 text-secondary">
                        Su estructura orgánica completa, en un formato que permita vincular cada parte de la estructura, las atribuciones y responsabilidades que le corresponden a cada servidor público, prestador
                        de servicios profesionales o miembro de los Sujetos Obligados, de conformidad con las disposiciones aplicables
                    </h4>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="team">
                            <img class="mx-auto rounded-circle" src="../../assets/img/deputy/GetFileFromPathComplete0f41.png" alt="">
                            <h4 class="text-lg-center">Diputada</h4>
                            <p class="text-muted text-lg-center">Dip.kshdsk</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="col-sm-4">
                        <div class="team">
                            <img class="mx-auto rounded-circle" src="../../assets/img/deputy/GetFileFromPathComplete2a65.jpg" alt="">
                            <h4 class="text-lg-center">Diputado</h4>
                            <p class="text-muted text-lg-center">Dip.David Najera Moreno</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="col-sm-4">
                        <div class="team">
                            <img class="mx-auto rounded-circle" src="../../assets/img/deputy/GetFileFromPathComplete2a65.jpg" alt="">
                            <h4 class="text-lg-center">Diputado</h4>
                            <p class="text-muted text-lg-center">Dip.David Najera Moreno</p>

                        </div>
                    </div>
                </div>
                <div class="row col-4">
                    <div class="col-sm-4">
                        <div class="team">
                            <img class="mx-auto rounded-circle" src="../../assets/img/deputy/GetFileFromPathComplete2a65.jpg" alt="">
                            <a class="text-lg-center">Diputado</a>
                            <p class="text-muted text-lg-center">Dip.David Najera Moreno</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
    import Gabinets from "../layouts/Gabinets";
    export default {
        name: "KnowYourDeputy",
        components: {Gabinets}
    }
</script>

<style scoped>
    .avatar{
        background-position: 50%;
        border-radius: 50%;
        background-size: 100% auto;
    }
    .team{
        margin-bottom: 50px;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 10px;
        text-transform: none;
        margin-right: 60px;
    }

</style>