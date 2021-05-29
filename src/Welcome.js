import React from "react";
const Welcome = props => {
    console.log(`props:`, props.name);
    return (<div>
        <h1>hello {props.name}</h1>
      <button onClick={() => props.alertMyInput('james')}>
        ClickMe
      </button>
      </div>
    );
   };
export default Welcome;
