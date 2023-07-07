import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketnotes-backend-alkh.onrender.com'
})
//é um objeto onde épossível passar algumas configuraçoes