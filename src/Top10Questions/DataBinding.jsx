import React, { useState } from "react";

function DataBinding(){

const divStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "lightblue",
    border: "1px solid blue",
    borderRadius: "5px",

}

    const [data , setData] = useState("");
    
    const handleInput = (e) =>{
        setData(e.target.value)
    }
    return (
        <div style = {divStyle}>
        <input type="text" placeholder="EnterText" onChange={handleInput} />
        <p>{data}</p>
        </div>
    )
}
export default DataBinding;