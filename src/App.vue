<template>
    <div id="app">
        <Navbar/>
        <router-view>

        </router-view>
    </div>

</template>

<script>
import Navbar from './components/layouts/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
