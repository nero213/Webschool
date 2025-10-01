<script setup>
import { ref, onMounted } from 'vue'
import { getLessons } from '@/services/lessons'

// ✅ correct way to give a name in <script setup>
defineOptions({
  name: 'SeeLessons',
})

const lessons = ref([])
const lessons_api = 'http://localhost:3000/api/lessons' // <-- make sure this exists

onMounted(async () => {
  try {
    const res = await getLessons()
    lessons.value = res.data;
  } catch (err) {
    console.error('There is a problem with the backend API', err)
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
