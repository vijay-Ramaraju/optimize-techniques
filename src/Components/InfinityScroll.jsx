import { useEffect, useState } from 'react';
import { URL } from './Constaints';

const InfinityScroll = () => {

    const [coinsData, setCoinsData] = useState([])
    const [visiblecards, setVisibleCards] = useState(20)

    useEffect(() => {
        getFetchData()
        const handelScroll = () => {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                setVisibleCards(prev => prev+20)
            }
        }
        window.addEventListener("scroll",handelScroll)
    }, [])
    const getFetchData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setCoinsData(data)
    }

    return (
      <div>
        <h1 className="text-2xl font-bold">Infinity Scroll</h1>
        <div className="flex flex-wrap justify-center items-center">
          {coinsData.slice(0,visiblecards).map((coin) => {
            return (
              <div className="p-2 m-2 shadow-md" key={coin.id}>
                <img className="w-36" src={coin.image} alt={coin.name} />
                <h2>{coin.name}</h2>
                <h2>{coin.current_price}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default InfinityScroll
