import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from './RTK/counterSlice';
import UseDarkLightTheme from './UseDarkLightTheme';

const CounterComponent = () => {
  // const{theme,setTheme} = useContext(UseDarkLightTheme)
  // const counter = useSelector(store=> store.counter.counter)
  // const dispatch = useDispatch()

  const handleIncrement = () => {
    // dispatch(incrementCounter())
  }

  const handleDecrement = () => {
    dispatch(decrementCounter())
  }
  const handleReset = () => {
    dispatch(resetCounter());
  };
  
  const handleTheme = () => {
    setTheme(prev=>!prev)
  }

  return (
    <div className="flex flex-col items-center">
      Counter
      {/* <button onClick={handleTheme}>{theme?"Light-Theme": "Dark-Theme"}</button>
      <h2>{counter}</h2>
      <div className={theme ? "text-black" : "text-gray-500 flex items-center p-2 gap-2"}>
        <button
          className="border border-gray-100 rounded-md p-2 m-2 bg-green-100 "
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="border border-gray-100 rounded-md p-2 m-2 bg-orange-100 "
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="border border-gray-100 rounded-md p-2 m-2 bg-red-100 "
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div> */}
    </div>
  );
}

export default CounterComponent
