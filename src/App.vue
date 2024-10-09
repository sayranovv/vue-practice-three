<template>
  <the-navbar :appTitle="appTitle"></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  data() {
    return {
      appTitle: 'Freelance'
    }
  },
  components: {
    TheNavbar,
  },
}
</script>

<style>

</style>
