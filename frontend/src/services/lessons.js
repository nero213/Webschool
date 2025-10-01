// src/services/lessons.js
import http from './http'

export function getLessons() {
  return http.get('/lessons') // GET
}

export function createLesson(lesson) {
  return http.post('/lessons', lesson) // POST
}

export function updateLesson(id, lesson) {
  return http.put(`/lessons/${id}`, lesson) // PUT
}

export function deleteLesson(id) {
  return http.delete(`/lessons/${id}`) // DELETE
}
