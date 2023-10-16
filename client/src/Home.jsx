import React, { useCallback, useEffect, useState } from 'react'
import { fetchAllNewsAPI } from './APIcalls'
import { useNavigate } from 'react-router-dom'

const newsStyle = {
    border: '2px solid black',
    padding: '5px',
    margin: '10px',
    cursor: 'pointer',
    width: 'auto',
}

const Home = () => {
    const [newsList, setNewsList] = useState(null)
    const navigate = useNavigate()
    const fetchAllNews = useCallback(async (newsId) => {
        const { data } = await fetchAllNewsAPI(newsId)
        setNewsList(data)
    }, [])

    useEffect(() => {
        if (!newsList) {
            fetchAllNews(newsList)
        }
    }, [fetchAllNews, newsList])

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>News Highlights</h1>
            {
                newsList?.map((news, index) => {
                    return (
                        <div key={index}>
                            <div
                                style={newsStyle}
                                onClick={() => {
                                    navigate(`/news/${news._id}`)
                                }}
                            >
                                <p>{news.news}</p>
                                <p style={{ fontWeight: 'bold' }}>{news.author}</p>
                            </div>
                        </div>
                    )
                })
            }
            <button onClick={() => {navigate('/create')}}>Create</button>
        </div>
    )
}

export default Home
