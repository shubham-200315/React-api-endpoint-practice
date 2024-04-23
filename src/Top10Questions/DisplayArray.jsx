import React from "react";

const users = [
    {name:"Abc", id:1},
    {name:"Xyz", id:2},
    {name:"pqr", id:3},
];

function DisplayArray(){
    return (
        <>
        <h3>User Names</h3>
        <ul>
         {users.map((user)=>(
         <li key={user.id}>{user.name}</li>
         ))}
        </ul>
        </>
    )
}
export default DisplayArray;