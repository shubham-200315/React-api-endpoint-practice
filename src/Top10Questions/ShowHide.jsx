import React, { useState } from "react";


function ShowHide()
{
   
    const divStyle = {
        display: "flex",
        justifyContent: "center", 
        padding: "10px",
        backgroundColor: "lightblue",
        border: "1px solid blue",
        borderRadius: "5px",
      };
      const handleClick = () => {
        setShow(!show);
      };
    const [show, setShow] = useState(true);
    return(
        <div style = {divStyle}>
        <button type="text" onClick={()=>{handleClick()}}>{show?"Hide":"Show"}</button>
        {show && (
            <div>
                <h2>Visible Content</h2>
            </div>
        )}
        </div>
        
    )
}
export default ShowHide;