<script setup>
import Navbarlogo from './navbarlogo.vue'

const props = defineProps({
  name: 'navlist',
  links: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="navbar">
    <Navbarlogo class="logo" />
    <ul>
      <li v-for="link in links" :key="link.text">
        <a :href="link.href"><img :src="link.src" />{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  background-color: #064e3b; /* dark green */
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  height: 13vh;
}
.logo {
  margin-right: 2px;
}
.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar li {
  display: flex;
}

.navbar a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0; /* remove button-like padding */
  color: #d5fded; /* keep green text */
  text-decoration: none;
  font-weight: bold;
  background: none !important; /* force no background */
  border-radius: 0; /* no rounded corners */
  transition: all 0.2s ease-in-out;
}

.navbar a:hover {
  color: #34d399; /* just change text color on hover */
  background: none; /* no background */
  transform: scale(1.08);
}

.navbar img {
  height: 20px;
  color: #064e3b;
}
</style>
