import React, { useReducer } from 'react'

const intitalVal = {
    count:0,
}

const ReducerFunc = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return { count: state.count + 1 }
            case 'Decrement':
                return { count: state.count - 1 }
            default:
                throw Error()
        }
        
    }
    const [state, dispatch] = useReducer(reducer, intitalVal)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "Increment" })}
          className="border border-gray-200 p-1 m-2 rounded-lg bg-green-200"
        >
          Increment
        </button>
        <h1>{state.count}</h1>
        <button
          onClick={() => dispatch({ type: "Decrement" })}
          className="border border-gray-200 p-1 m-2 rounded-lg bg-orange-200"
        >
          Decrement
        </button>
      </div>
    );
}

export default ReducerFunc
