<script setup>
import HeroSection from './components/heroSection/heroSection.vue'
import navbar_app from './components/navbar/navbar_app.vue'
</script>

<template>
  <navbar_app class="sidenav" />
  <!-- <SeeLessons /> -->
  <HeroSection class="herosection" />
</template>

<style>
.sidenav {
  z-index: 2;
}

.herosection {
  z-index: 1;
}
</style>
