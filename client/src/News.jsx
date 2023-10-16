import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchNewsAPI, deleteNewsAPI } from './APIcalls'

const newsStyle = {
    border: '2px solid red',
    padding: '5px',
    margin: '10px'
}

const News = () => {
    const { newsId } = useParams()
    const [news, setNews] = useState(null)
    const navigate = useNavigate()

    const fetchNews = useCallback(async(newsId) => {
        const { data } = await fetchNewsAPI(newsId)
        setNews(data)
    }, [])

    useEffect(() => {
        if (!news) {
            fetchNews(newsId)
        }
    }, [fetchNews, news, newsId])

    const handleDelete = async () => {
        await deleteNewsAPI(newsId)
        navigate('/')
    }

    return (
        news?
        <>
            <div style={newsStyle}>
                <p>{news.news}</p>
                <p style={{ fontWeight: 'bold' }}>{news.author}</p>
            </div>
            <button onClick={() => {
                navigate('/')
            }}>
                Home
            </button>
            <button onClick={() => {
                navigate(`/news/edit/${newsId}`)
            }}>
                Edit
            </button>
            <button onClick={handleDelete}>
                Delete
            </button>
        </>
        :
        null
    )
}

export default News
