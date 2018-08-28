<template>
    <div id="app">
        <Navbar/>
        <router-view class="footer"></router-view>
        <div>
            <Footer/>
        </div>
    </div>
</template>

<script>
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar, Footer
  }
}
</script>

<style>
    body {
        position: relative;
        padding-bottom: 180px;
        min-height: 100%;
    }

    html {
        height: 100%;
        box-sizing: border-box;
    }

</style>
