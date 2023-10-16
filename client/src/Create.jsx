import React, { useState } from 'react'
import { postNewsAPI } from './APIcalls'
import { useNavigate } from 'react-router-dom'

const style = {
    border: '2px solid black',
    padding: '5px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
}

const Create = () => {
    const [data, setData] = useState({
        news: '',
        author: ''
    })
    const navigate = useNavigate()
    const handleSubmit = async () => {
        await postNewsAPI(data)
        navigate('/')
    }
    return (
        <>
            <h1>Post News</h1>
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
                <button onClick={handleSubmit}>Submit</button>

            </div>
            <button onClick={() => {navigate('/')}}>Home</button>
        </>
    )
}

export default Create
