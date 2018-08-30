<template>
    <div>
       <Gabinets/>
        <div class="container">
                <table class="row">
                    <tr class="col-2 text-dark text-lg-center font-weight-bold">
                        <img src="../../assets/img/deputy/GetFileFromPathComplete0f41.png" alt="" class="avatar">
                        Diputada
                        <button class="btn btn-info">
                            ver más
                        </button>
                    </tr>
                    <tr class="col-2">
                        <img src="../../assets/img/deputy/GetFileFromPathComplete0f41.png" alt="" class="avatar">
                    </tr>
                </table>
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
</style>