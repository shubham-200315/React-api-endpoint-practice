import React, { useState } from "react";

function DisableButton(){
    const [data, setData] = useState("");
    return(
        <>
        <input type="text" placeholder="Enter text" onChange={(e)=>{setData(e.target.value)}}/>
        <button type = "submit" disabled={!data}> submit </button>
        </>
    )
}
export default DisableButton;