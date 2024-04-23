import React, { useState } from "react";

function IncDecCount(){
    const [data, setData] = useState(0);
    function handleIncrement(){
        setData(data+1);
    }
    function handleDecrement(){
        if(data>0)
        setData(data-1);
    }
    return (
        <>
        <div>Counter : {data}</div>
         <button type="button" onClick={handleIncrement}>Increment</button>
         <button type="button" onClick={handleDecrement} >Decrement</button>
        </>
    )
}
export default IncDecCount;