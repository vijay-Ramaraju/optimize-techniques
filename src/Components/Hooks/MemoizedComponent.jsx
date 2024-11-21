import React, { useEffect, useState } from 'react'

const MemoizedComponent = ({ greetings }) => {
    const [greet, setGreets] = useState("")
    useEffect(() => {
        setGreets(greetings());
    }, [greetings]);
    console.log("Child Component....!");
    return <div>{greet}</div>;
};

export default React.memo(MemoizedComponent)
