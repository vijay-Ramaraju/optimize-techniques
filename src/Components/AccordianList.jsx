
const AccordianList = ({ id,title, desc, isOpen,setOpen  }) => {
    console.log( isOpen)
    return (
      <div className="bg-gray-50 text-left p-2 m-2 border border-gray-200">
        <div
          onClick={() => setOpen(isOpen=> !isOpen)}
          className=" bg-gray-200 p-1 flex justify-between"
        >
          <h1>{title}</h1>
          <span>🔻</span>
          {/* 🔺 */}
        </div>
        {isOpen && <p>{desc}</p>}
      </div>
    );
}

export default AccordianList
