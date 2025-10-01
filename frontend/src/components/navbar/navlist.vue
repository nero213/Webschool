<script setup>
const props = defineProps({
  name: 'navlist',
  links: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.text">
      <a :href="link.href"><img :src="link.src" />{{ link.text }}</a>
    </li>
  </ul>
</template>
