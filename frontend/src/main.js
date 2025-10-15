import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import AnimateInView from '@neeravp/vue-3-animate-in-view'

const app = createApp(App)
app.mount('#app')
app.use(AnimateInView)
