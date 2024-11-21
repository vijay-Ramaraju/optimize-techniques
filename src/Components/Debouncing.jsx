import React, { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../../src/assets/Constains";
import { useDispatch, useSelector } from "react-redux";
import { addSearchItems } from "./RTK/searchSlice";

const Debouncing = () => {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState("");
  const [searchApi, setSearchApi] = useState([])
  const cache = useSelector(store=>store.search)
  const handleOnchange = (e) => {
    setSearchText(e.target.value);
  };
  console.log(cache)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchText]) {
      setSearchApi(cache[searchText])
      } else if (searchText) {
        getTheSearchData()
    }
  }, 300);
    return ()=>clearTimeout(timer)
  },[searchText]);

  const getTheSearchData = async() => {
    const response = await fetch(SEARCH_SUGGESTION_API + searchText)
    const data = await response.json()
    dispatch(addSearchItems({
      [searchText]:data[1],
    }))
    setSearchApi(data[1]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-3xl text-red-500">
        Debouncing Implementation
      </h1>
      <div className="flex w-full  justify-center">
        <div className="flex flex-col">
          <input
            value={searchText}
            type="search"
            onChange={handleOnchange}
            className="w-96 outline-green-200 border border-gray-200 p-3 m-2 rounded-lg"
            placeholder="search here"
          />
          {searchText.length > 1 && (
            <ul className="border border-gray-100 rounded-lg shadow-md p-2 flex flex-col items-start justify-start">
              {searchApi.map((text, index) => (
                <li className="p-2 bg-gray-50 w-full flex m-1" key={index}>
                  {text}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button className="p-3 rounded-lg bg-green-200 ">Search</button>
        </div>  
      </div>
    </div>
  );
};

export default Debouncing;
