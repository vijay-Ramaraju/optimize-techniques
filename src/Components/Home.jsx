import React, { useContext, useEffect, useState } from 'react'
// import UseDarkLightTheme from './UseDarkLightTheme'
import { URL } from './Constaints'

const Home = () => {
  const [coinsData, setCoinsData] = useState([])
  const [initialShow, setInitialShow] = useState(12)

  useEffect(() => {
    fetchData();
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setInitialShow((prev) => prev + 12);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchData = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    setCoinsData(data)
    }
  return (
    <div className="">
      Home
      <div className="flex flex-wrap ">
        {coinsData.slice(0, initialShow).map((coin) => {
          return (
            <div
              className="flex flex-col border w-52 border-gray-100 shadow-md p-2 m-2 justify-center items-center"
              key={coin.id}
            >
              <img className="w-36" src={coin.image} />
              <h1>{coin.name}</h1>
              <h2>{coin.current_price}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home
