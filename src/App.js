import React, { useEffect, useState } from "react";
import axios from "axios";
import FetchApi from "./Top10Questions/FecthApi";
import DisplayArray from "./Top10Questions/DisplayArray";
import ShowHide from "./Top10Questions/ShowHide";
import DataBinding from "./Top10Questions/DataBinding";
import DisableButton from "./Top10Questions/DisableButton";
import ChildUpdateParent from "./Top10Questions/ChildUpdateParent";
import SumOfTwo from "./Top10Questions/SumOfTwo";
import IncDecCount from "./Top10Questions/IncDecCount";
import FetchApi2 from "./Top10Questions/FetchApi2";
function App(){

  return(
    <>
    {/* <DisplayArray/> */}
    {/* <ShowHide/> */}
    {/* <DataBinding/> */}
    {/* <DisableButton/> */}
    {/* <ChildUpdateParent/> */}
    {/* <SumOfTwo/> */}
    {/* <IncDecCount/> */}
    <FetchApi2/>
    </>
  )
}

export default App;