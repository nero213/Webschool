<script setup>
import navlist from './navlist.vue'
<<<<<<< HEAD
import mango from '../../assets/mango.png'
import { ref } from 'vue'

=======
import AboutIcon from '@/assets/about.svg'
import HomeIcon from '../../assets/home.svg'
>>>>>>> 744c5aa (improve the navbar)
defineProps({
  name: 'navbar',
})

const navlinks = [
<<<<<<< HEAD
  {src: mango, href: '#home', text: 'testing'},
  { src: mango, href: '#home', text: 'testing' },
=======
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
>>>>>>> 744c5aa (improve the navbar)
]
</script>
<template>
  <navlist :links="navlinks" />
</template>
