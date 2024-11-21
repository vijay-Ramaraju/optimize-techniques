import React, { useState } from 'react'

const AccoridonList = ({ id, title, desc, isOpen, initailOpen, setInitailOpen }) => {
    const handleOnclick = () => {
        setInitailOpen(id
        //     prev => {
        //     if (prev.includes(id)) {
        //         return prev.filter(each=> each !== id)
        //     } else {
        //         return [...prev,id] 
        //     }
        // }
        )
    }
    console.log(initailOpen)
            
  return (
    <div className="text-left border border-gray-100 rounded-md p-2 m-2 bg-green-100">
      <div
        onClick={handleOnclick}
        className="bg-gray-100 p-2 m-1 flex justify-between items-center"
      >
        <h1>{title}</h1>
        <span>🔻</span>
      </div>
          {
            //   initailOpen.includes(id)
              isOpen && <p>{desc}</p>}
    </div>
  );
};

export default AccoridonList
