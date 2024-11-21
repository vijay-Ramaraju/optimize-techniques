import React, { useCallback, useMemo, useState } from "react";
import MemoizedComponent from "./MemoizedComponent";

const PerformanceOptimization = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const greetings = useCallback(() => {
    return `Hello ${name}`;
  },[]);
  console.log("parent component");
  return (
    <div>
      <input
        className="border border-gray-200 p-2 m-2"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <MemoizedComponent greetings={greetings} />

      <button
        className="border border-gray-200 bg-green-200 rounded p-2 m-2 text-xl"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
          <h1 className="text-2xl ">
              
          {count}
      </h1>
    </div>
  );
};

export default PerformanceOptimization;
