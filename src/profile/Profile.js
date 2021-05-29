import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
export default function Profile (props){
    const {fullName,profession,bio,handleName}= props
    const styleNav={color:'blue',textAlign:'center',backgroundColor:'black',width:'100%',height:'80px',margin:'0px',paddingTop:"20px"}
    return (
        <div>
            <h1 style={styleNav}>{fullName}</h1>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center',backgroundColor:'blue',paddingTop:'0px'}}>
            {props.children}
            <h1 >{profession}</h1>
            <p style={{padding:"0 200px",fontSize:"large"}}>
                {bio}
                Tom Hardy, born September 15, 1977 in London, is a British actor considered the current specialist in physical metamorphosis. More than the psychology of the character, he decides to come closer to it in appearance to increase the realism of the scenes. A follower of virile and violent characters, he was able to meet the best actors and directors in the world and become a key actor.
            </p>
            {handleName("Tom Hardy")}
            </div>
      </div>
    );
};
Profile.defaultProps={
    fullName:"Edward Thomas Hardy",
    profession:"Actor",
    bio:"HollywoodActor",

}
Profile.propTypes={
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string,
    handleName:PropTypes.func,
}