import React, { useEffect, useState, useCallback } from 'react'
import { editNewsAPI, fetchNewsAPI } from './APIcalls'
import { useNavigate, useParams } from 'react-router-dom'

const style = {
    border: '2px solid black',
    padding: '5px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
}

const Edit = () => {
    const { newsId } = useParams()
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const fetchNews = useCallback(async (newsId) => {
        const { data } = await fetchNewsAPI(newsId)
        setData({
            news: data.news,
            author: data.author
        })
    }, [])

    useEffect(() => {
        if (!data) {
            fetchNews(newsId)
        }
    }, [data, fetchNews, newsId])

    const handleUpdate = async () => {
        await editNewsAPI(newsId, data)
        navigate('/')
    }
    return (
        <div>
            <h1>Edit News</h1>
            {
                !data ?
                    null :
                    <div style={style}>
                        News:
                        <input
                            type="text"
                            value={data.news}
                            onChange={(e) => setData({ ...data, news: e.target.value })}
                        />
                        <br />
                        Author:
                        <input
                            type="text"
                            value={data.author}
                            onChange={(e) => setData({ ...data, author: e.target.value })}
                        />
                        <br />
                        <button onClick={handleUpdate}>Update</button>
                    </div>
            }
            <button onClick={() => { navigate('/') }}>Home</button>
        </div>
    )
}

export default Edit
