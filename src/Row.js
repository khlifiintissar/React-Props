import React from "react";
function Row({fname,lname,email,doSomething}){
    return(
        <div>
            <div>
                <span>
                    First Name : {fname} 
                </span>
            </div>
            <div>
                <span>Last Name : {lname}</span>
            </div>
            <div>
                <span>Email :{email}</span>
            </div>
            <div>
                <button onClick={()=>doSomething('sarah')}>click here</button>
            </div>
        </div>
    );
};
export default Row ;