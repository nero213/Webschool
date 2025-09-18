<script setup>
import { ref, onMounted } from 'vue'
const lessons_api = import.meta.env.VITE_BASE_LESSONS_API

const lessons = ref([])

onMounted(async () => {
  try {
    const response = await fetch(lessons_api)
    lessons.value = await response.json()
  } catch (err) {
    console.error('there is a problem with the backend api')
  }
})
</script>

<template>
  <div>
    <h1>Lessons</h1>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
        {{ lesson.title }}
      </li>
    </ul>
  </div>
</template>

<style></style>
