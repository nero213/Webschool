<script setup>
import HeroApp from './components/heroSection/heroApp.vue';
import navbar_app from './components/navbar/navbar_app.vue'

</script>

<template>
  <navbar_app class="sidenav" />
  <!-- <SeeLessons /> -->
  <HeroApp class="herosection" />

</template>


<style>
.sidenav {
  z-index: 2;
}

.herosection {
  z-index: 1;
}
</style>