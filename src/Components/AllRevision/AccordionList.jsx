    import React from 'react'

    const AccordionList = ({ title, comment, isOpen, setActiveAcc }) => {
      return (
        <div className="text-left border border-gray-300 p-2 m-2">
          <div onClick={()=> setActiveAcc(isOpen => !isOpen)} className="bg-gray-200 p-2 flex justify-between items-center">
            <h1>{title}</h1>
            <span>🔻</span>
          </div>
          {isOpen && <p>{comment}</p>}
        </div>
      );
    };

    export default AccordionList
