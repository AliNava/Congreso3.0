<template>
    <div>
        <img src="../../assets/img/banners/historia del congreso-01.jpg" class="img-fluid" alt="first image">
        <div>
            <section class="page-section">
                <div class="container">
                    <div class="product-item">
                        <div class="product-item-title d-flex">
                            <div class="bg-faded p-5 d-flex ml-auto rounded">
                                <h2 class="section-heading mb-0">
                                    <span class="section-heading-upper">Congreso del Estado de Aguascalientes</span>
                                    <span class="section-heading-lower">Su Historia...</span>
                                </h2>
                            </div>
                        </div>
                        <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="img/products-01.jpg" alt="">
                        <div class="product-item-description d-flex mr-auto">
                            <div class="bg-faded p-5 rounded">
                                <p class="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page-section">
                <div class="container">
                    <div class="product-item">
                        <div class="product-item-title d-flex">
                            <div class="bg-faded p-5 d-flex mr-auto rounded">
                                <h2 class="section-heading mb-0">
                                    <span class="section-heading-upper">vestibulo</span>
                                    <span class="section-heading-lower">Congreso del estado</span>
                                </h2>
                            </div>
                        </div>
                        <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="../../assets/img/vestibulo.png" alt="">
                        <div class="product-item-description d-flex ml-auto">
                            <div class="bg-faded p-5 rounded">
                                <p class="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section">
                <div class="container">
                    <div class="product-item">
                        <div class="product-item-title d-flex">
                        </div>
                        <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="../../assets/img/salon_de_sesiones.png" alt="">
                        <div class="product-item-description d-flex mr-auto">
                            <div class="bg-faded p-5 rounded">
                                <p class="mb-0">Travelling the world for the very best quality coffee is something take pride in. When you visit us, you'll always find new blends from around the world, mainly from regions in Central and South America. We sell our blends in smaller to large bulk quantities. Please visit us in person for more details.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer text-faded text-center py-5">
            </footer>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CongressHistory"
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


</style>