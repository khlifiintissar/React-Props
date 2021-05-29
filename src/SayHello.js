import React from "react";
function SayHello (props){
    return(
    <button onClick={() => props.alertHello('Hello Word')}>
        ClickMe
      </button>
    );
}
export default SayHello;