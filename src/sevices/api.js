import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})
//é um objeto onde épossível passar algumas configuraçoes