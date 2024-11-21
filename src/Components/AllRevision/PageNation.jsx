//35 min
import { useEffect, useState } from "react";
import { URL } from "../Constaints";

const PageNation = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [cardsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    // console.log(jsonData)
    setCoinsData(jsonData);
    };
    
    let lastIndex = currentPage * cardsPerPage;
    let firstIndex = lastIndex - cardsPerPage;
    let totalPages = Math.floor((coinsData.length) / cardsPerPage)
    
    const handleNextButton = () => {
        
        setCurrentPage(prev => {
            if (prev < totalPages) {
                return prev + 1
            }
        })
    }
    const handlePrevButton = () => {
        setCurrentPage(prev => {
            if (prev > 1) {
                return prev - 1
            }
        })
    }
    
    return (
      <div className="flex flex-col">
        <h1>Page: { currentPage}</h1>
    <div className="flex flex-wrap p-2 m-2">
      {coinsData.slice(firstIndex, lastIndex).map((coin) => {
        return (
          <div
          className="w-48 border border-gray-200 rounded-md shadow-md flex flex-col gap-2 m-1 p-2"
          key={coin.id}
          >
            <img className="w-40" src={coin.image} />
            <h1 className="break-words">{coin.name}</h1>
            <h1>{coin.current_price}</h1>
          </div>
        );
    })}
            </div>
            <div className="flex gap-2 justify-center items-center">

                {currentPage > 1 && <button onClick={handlePrevButton}>Prev</button>}
          {Array(totalPages).fill().map((each, index) => {
              return (<div key={index}>
                  <button onClick={()=> setCurrentPage(index+1)} className="border border-gray-500 px-2 py-1 ">{index + 1}</button>
              </div>)
          })}
                {currentPage < (totalPages) && <button onClick={handleNextButton}>Next</button>}
          </div>
    </div>
  );
};

export default PageNation;
