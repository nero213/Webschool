<script setup>
defineProps({
  name: 'navbarlogo',
})
import NavbarLogo from '@/assets/navbarlogo.png'
</script>

<template>
  <div class="Navbarlogo"><img :src="NavbarLogo" /></div>
</template>

<style scoped>
.Navbarlogo img {
  height: 4rem; /* set a consistent height */
  width: 4rem;
}
</style>
