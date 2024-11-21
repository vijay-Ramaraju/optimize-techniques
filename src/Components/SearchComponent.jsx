import React, { useEffect, useState } from "react";

const searchData = [
  "Vijay",
  "Varu",
  "Vinay",
  "Vamana",
  "Viraj",
  "Ram",
  "Rama",
  "Raju",
  "Ramaraju",
  "Parasu Rama",
  "Amma",
  "Siva",
];

const SearchComponent = () => {
    const [userData, setUserData] = useState("");
    const [users, setUsers] = useState(searchData)
    useEffect(() => {
        setUsers(searchData.filter((data) =>
          data.toLowerCase().includes(userData.toLowerCase())
        ))
    },[userData])
  const handleChange = (e) => {
      setUserData(e.target.value);
    //   setUsers(searchData.filter(data=> data.toLowerCase().includes(userData.toLowerCase()) ));
  };
  return (
    <div>
      <div>
        <input
          value={userData}
          onChange={handleChange}
          type="search"
          className="border border-gray-200 rounded-md p-2 m-2"
        />
      </div>
      <ul>
        {users.map((each, index) => (
          <li className="m-1 p-1 bg-gray-50 text-lg text-center" key={index}>
            {each}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
