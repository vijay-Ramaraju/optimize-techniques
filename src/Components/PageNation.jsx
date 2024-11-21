import React, { useEffect, useState } from "react";
import { URL } from "./Constaints";

const PageNation = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    getFetchData();
  }, []);

  const getFetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCoinsData(data);
    };
    const handleOnClick = () => {
      
    };

  
      const lastpostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastpostIndex - postsPerPage;
      const numberOfPages = Math.ceil(coinsData.length / postsPerPage);
  console.log(currentPage)
  return (
    <div className="flex flex-col justify-center">
      PageNation
      <div className="flex flex-wrap justify-center">
        {coinsData.slice(firstPostIndex, lastpostIndex).map((coin) => {
          return (
            <div className="p-2 m-2 shadow-md text-center" key={coin.id}>
              <img className="w-40" src={coin.image} alt={coin.name} />
              <h2>{coin.name}</h2>
              <h2>{coin.current_price}</h2>
            </div>
          );
        })}
          </div>
          <div className="flex items-center gap-2 justify-center m-2">
              
              {[...Array(numberOfPages)].fill().map((page, index) => {
                  return <button onClick={()=> setCurrentPage(index+1)} className="border border-gray-300 px-2 py-1" key={page}> {index + 1}</button>
              })}
          </div>
    </div>
  );
};

export default PageNation;
