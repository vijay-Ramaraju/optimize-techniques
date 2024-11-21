import { useEffect, useState } from "react";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const Sample = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currancy, setCurrancy] = useState();
  useEffect(() => {
    getFetchData();
  }, []);

  const getFetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    setCoinsData(data);
  };
  const handleOnchange = (e) => {
    const currancyData = coinsData.find((coin) => coin.id === e.target.value);
    setCurrancy(currancyData);
  };

  console.log(currancy);
  return (
    <div className="flex flex-col items-center justify-center">
      Sample
      <select
        onChange={handleOnchange}
        className="border border-gray-100 rounded p-2 m-2"
      >
        <option>Choose Coin type</option>
        {coinsData.map((coin) => {
          return (
            <option value={coin.id} key={coin.id}>
              {coin.name}
            </option>
          );
        })}
      </select>
      {currancy ? (
        <div className="flex flex-col items-center shadow-md p-2 m-2">
          <img
            className="bg-gray-50 w-24 h-24 m-2 shadow-md p-2"
            src={currancy.image}
          />
          <h1 className="text-xl ">Price: {currancy.current_price}</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Sample;
