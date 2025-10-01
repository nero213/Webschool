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
      <img :src="link.src" />
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>
</template>
