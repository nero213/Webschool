<script setup>
import { ref, onMounted } from 'vue'
import { getLessons } from '@/services/lessons'

// ✅ correct way to give a name in <script setup>
defineOptions({
  name: 'SeeLessons',
})

const lessons = ref([])

onMounted(async () => {
  try {
    const res = await getLessons()
    lessons.value = res.data
  } catch (err) {
    console.error('There is a problem with the backend API', err)
  }
})
</script>

<template>
  <div>
    <h1>Lessons</h1>
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">{{ lesson.title }} {{ lesson.language }}</li>
    </ul>
  </div>
</template>
