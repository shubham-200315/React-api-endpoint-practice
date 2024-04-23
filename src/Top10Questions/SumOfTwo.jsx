import React, { useState } from "react";

// function Child({setTotal, data, value}){
//     return <>
//        <div>
//         <button type="button" onClick={()=>setTotal(parseInt(data,10)+parseInt(value,10))}>Add Two Numbers</button>
//        </div>
//     </>
// }


function SumOfTwo(){
     const [data,  setData] = useState();
     const [value, setValue] = useState();
     const [ total, setTotal] = useState(0);
     function sum(){
       setTotal(data+value);
     }
    return(
        <>
        <div>
            <input type="number" placeholder="First Number" value= {data} onChange={(e)=>setData(+e.target.value)}/>
        </div>
        <div>
            <input type="number" placeholder="Second Number" value={value} onChange={(e)=>setValue(+e.target.value)}/>
        </div>
            <button onClick={sum}>Add</button>
        <div>
            {/* <Child setTotal={setTotal} data={data} value={value}/> */}
            Total: {total || ""}
        </div>
        </>
    )
}
export default SumOfTwo;