/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const DropDown = () => {
  const [api, setApi] = useState([]);
  const [name, setName] = useState(null);
  const [visible, setVisible] = useState(20);

  useEffect(() => {
    getCoinsFetch();

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setVisible((prev) => prev + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCoinsFetch = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const jsonData = await response.json();

    setApi(jsonData);
  };
  //
  //   const handleChange = (e) => {
  //     const currancy = api.find((each) => each.name === e.target.value);
  //     setName(currancy);
  //   };

  return (
    <div className="flex flex-wrap  p-2">
      {/* <select
        onChange={handleChange}
        className="border border-gray-200 rounded-lg p-2 m-2"
      >
        <option>Chose option</option>
        {api.map((coinType) => {
          return (
            <option key={coinType.id} >
              {coinType.name}
            </option>
          );
        })}
      </select> */}

      {/* {name ? <h1>{name.current_price}</h1> : null} */}

      {api.slice(0, visible).map((each) => {
        return (
          <div key={each.id} className=" gap-2 p-3 flex shadow-md border border-gray-50 rounded-lg flex-col m-3">
            <img className="w-40 " src={each.image} />
            <h2>{each.name}</h2>
            <h2>{each.current_price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
