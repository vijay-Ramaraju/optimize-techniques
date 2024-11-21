    import React from 'react'

    const MultiAcc = ({id,head, comment, initialAcc, setInitialAcc}) => {
       
        const handleAcc = () => {
            setInitialAcc(prev => {

                if (prev.includes(id)) {
                    return prev.filter(e=>e !== id)
                } else {
                    return [...prev ,id]
                }
            }
            )
        }

    return ( 
        <div className="border border-gray-300 text-left m-2 p-2">
            <div onClick={handleAcc} className='bg-gray-200 p-2  flex justify-between items-center' >
                <h1>{head}</h1>
                <span>🔻</span>
            </div>
            {initialAcc.includes(id) && <p>{ comment}</p>}
        </div>
    );
    };

    export default MultiAcc
