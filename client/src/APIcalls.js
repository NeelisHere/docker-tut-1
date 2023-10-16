import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL
// const API_BASE_URL = 'http://localhost:8000'

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
    }
})

export const fetchNewsAPI = async (newsId) => api.get(`/news/${newsId}`)
export const fetchAllNewsAPI = async () => api.get(`/news/`)
export const postNewsAPI = async (data) => api.post('/news/new', data)
export const editNewsAPI = async (newsId, data) => api.put(`/news/${newsId}`, data)
export const deleteNewsAPI = async (newsId) => api.delete(`/news/${newsId}`)