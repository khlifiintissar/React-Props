import React from "react";
export default function ReactHeader (props){
    return(<h1>React {props.version} Documentation</h1>);
    
};
ReactHeader.defaultProps={
    version:"16"
}