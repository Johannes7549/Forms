import React from "react";
import './header.css'
function Header(props){
    return (
        <header className="header">
        <button className="signup-button" onClick={props.setShowSignUp}>{
            props.showSignUp ? 'Login':'Sign up'
        }</button>
        {!props.skipClicked && <button className="skipButton" onClick={props.setSkipClicked}>Skip</button>}
      </header>
    )
}
export default Header;