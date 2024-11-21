// debouncing
// limit the rate of API calls
// Caching technique

import { useEffect, useState } from "react"

const DebounceCode = () => {
    const [userText, setUserText] = useState("")


    useEffect(() => {
        // two keystroke event s diff 300 , Then it make a api call 
        const timer = setTimeout(() => {
            // API CALL
            
        }, 300)
        return ()=>{clearTimeout(timer)}
    },[userText])

    return (
        <input
            value={userText}
        onChange={(e) => setUserText(e.target.value)}
        type="search"
        className="border border-gray-200 p-2 m-2 text-xl"
      />
    );
}

export default DebounceCode