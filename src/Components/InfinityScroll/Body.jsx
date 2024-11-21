import React, { useEffect, useState } from 'react'

const Body = () => {
const [meme,setMeme] =useState([])
    useEffect(() => {
        fetchData()
        window.addEventListener('scroll',handleScroll)
    }, [])
    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            fetchData()
        }
    }
    const fetchData = async () => {
        try {
            const response = await fetch("https://meme-api.com/gimme/20")
            const data = await response.json()
            console.log(data.memes)
            setMeme(data.memes)
        } catch(err) {
            console.log(err.message)
        }
    }

    return <div className='flex flex-wrap'>{meme.map(mem => {
        
          return (
            <div className="flex flex-col gap-1 p-2 m-2 border border-gray-500 rounded-lg" key={mem.title}>
              <img className='w-44 h-44' alt={mem.title} src={mem.preview[0]} />
              <h1>{mem.author}</h1>
            </div>
          )
        })}
        </div>
}

export default Body
