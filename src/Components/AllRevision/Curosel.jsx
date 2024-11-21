import React, { useEffect, useState } from 'react'
import { URL } from '../Constaints'

const Curosel = () => {
    const [coins, setCoins] = useState([])
    const [data, setData] = useState(0)
    useEffect(() => {
        fetchData()
        
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
          setData(prev=> (prev >= coins.length -1 ? 0:prev + 1))
        }, 1000);
        return () => clearInterval(timer);
    },[coins])
    const fetchData = async () => { 
        const response = await fetch(URL)
        const data = await response.json()
        setCoins(data.slice(0,10))
    }
    // console.log(coins.length)
    return (
      <div className='flex justify-center flex-col items-center'>
        <div className="w-80 flex flex-col justify-center items-center border border-gray-300 p-2 m-2">
          <img className="w-28 object-contain" src={coins[data]?.image} />
          <h1>{coins[data]?.name}</h1>
        </div>
        <div className="flex gap-2 mt-4">
          {coins.map((_, index) => (
            <button
              key={index}
              onClick={() => setData(index)}
              className={`w-4 h-4 rounded-full ${
                index === data ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
}

export default Curosel
