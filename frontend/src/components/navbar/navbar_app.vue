<script setup>
import navlist from './navlist.vue'
import mango from '../../assets/mango.png'
import { ref } from 'vue'

defineProps({
  name: 'navbar',
})

const navlinks = [
  {src: mango, href: '#home', text: 'testing'},
  { src: mango, href: '#home', text: 'testing' },
]
</script>
<template>
  <navlist :links="navlinks" />
</template>
