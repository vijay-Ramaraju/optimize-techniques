import { useEffect, useState } from "react"

const useCustomHook = () => {
    
    const [fetchData, setfetchData] = useState();
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json()
            setfetchData(data)
        }
        getData()
    },[])
    return [fetchData]

}


export default useCustomHook