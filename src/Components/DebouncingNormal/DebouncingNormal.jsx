import { useEffect, useState } from "react";

const DebouncingNormal = () => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(userData);
    }, 300);
    return () => clearTimeout(timer);
  }, [userData]);

  return (
    <div>
      <input
        className="border border-gray-400 rounded-md py-1 px-2 m-2"
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default DebouncingNormal;
