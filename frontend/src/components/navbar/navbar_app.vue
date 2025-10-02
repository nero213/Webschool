<script setup>
import navlist from './navlist.vue'
import { ref } from 'vue'
import AboutIcon from '@/assets/about.svg'
import HomeIcon from '../../assets/home.svg'
defineProps({
  name: 'navbar',
})

const navlinks = [
  { src: HomeIcon, href: '#home', text: 'Home' },
  {
    src: AboutIcon,
    href: '#about',
    text: 'About',
  },
  {
    src: AboutIcon,
    href: '#about',
    text: 'About',
  },
  {
    src: AboutIcon,
    href: '#about',
    text: 'About',
  },
]
</script>
<template>
  <navlist :links="navlinks" />
</template>
