import React, { useState } from "react";

function Child({setData}){

    return(
        <>
        <div> Child </div>
        <button onClick={()=>setData("Parent Has Been Updated")}>Change Parent Value</button>
        </>
    )
}
function ChildUpdateParent(){
    const [data, setData] = useState("I need to get Updated")
    return (
        <>
        <h3>Update Parent State Change Using (CallBack)</h3>
        <div className="wrapper">
            <div>Parent</div>
            <div className="box-wrapper">{data}</div>
        </div>
        <div className="wrapper">
            <Child setData={setData}/>
        </div>
        </>
    )
}
export default ChildUpdateParent;