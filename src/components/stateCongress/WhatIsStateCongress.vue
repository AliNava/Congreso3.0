<template>
    <div>
        <img src="../../assets/img/banners/que es el congreso del estado-01.jpg" class="img-fluid" alt="first image">
        <div>
            <div >
                <div class="bg">
                    <section class="page-section bg">
                        <div class="container">
                            <div class="product-item">
                                <div class="product-item-title d-flex">
                                    <div class="bg-faded p-5 d-flex ml-auto rounded">
                                        <h2 class="section-heading mb-0">
                                            <span class="section-heading-upper">conoce...</span>
                                            <span class="section-heading-lower">¿Que es congreso del estado?</span>
                                        </h2>
                                    </div>
                                </div>
                                <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0 col-4" src="../../assets/img/pleno_legislativo.png" alt="">
                                <div class="product-item-description d-flex mr-auto">
                                    <div class="bg-faded p-5 rounded">
                                        <p class="mb-0">Es el órgano en el que se deposita el poder legislativo de una entidad federativa.
                                            En México los congresos locales son unicamerales ya que se integran sólo por una Cámara de Diputados Entre sus principales atribuciones</p>
                                    </div>
                                </div>
                                <div class="bg-faded p-5 rounded margin">
                                    <p class="mb-0">Es el órgano en el que se deposita el poder legislativo de una entidad federativa.
                                        En México los congresos locales son unicamerales ya que se integran sólo por una Cámara de Diputados Entre sus principales atribuciones</p>
                                    <div class="bg-faded p-5 rounded margin">
                                        <p class="mb-0">Es el órgano en el que se deposita el poder legislativo de una entidad federativa.
                                            En México los congresos locales son unicamerales ya que se integran sólo por una Cámara de Diputados Entre sus principales atribuciones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="footer text-faded text-center py-5">
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WhatIsStateCongress"
    }
</script>

<style scoped>

    p {
        line-height: 1.75;
    }

    .text-faded {
        color: rgba(255, 255, 255, 0.3);
    }

    .page-section {
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    .section-heading {
        text-transform: uppercase;
    }

    .section-heading .section-heading-upper {
        display: block;
        font-size: 1rem;
        font-weight: 800;
    }

    .section-heading .section-heading-lower {
        display: block;
        font-size: 3rem;
        font-weight: 100;
    }

    .bg-faded {
        background-color: rgba(255, 255, 255, 0.85);
    }

    @media (min-width: 992px) {
        .product-item .product-item-title {
            position: relative;
            z-index: 1;
            margin-bottom: -3rem;
        }
        .product-item .product-item-img {
            position: relative;
            z-index: 0;
            max-width: 60vw;
        }
        .product-item .product-item-description {
            position: relative;
            z-index: 1;
            margin-top: -3rem;
            max-width: 50vw;
        }
    }

    .address strong {
        font-size: 1.2rem;
    }

    .footer {
        background-image: url("../../assets/img/clean-2721103_1920.jpg");
    }
    .margin{
        margin-top: 5px;
    }

</style>