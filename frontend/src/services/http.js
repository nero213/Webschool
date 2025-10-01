import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/api/lessons',
  headers: {
    'Content-Type': 'applicaiton/json',
  },
})

export default axios;