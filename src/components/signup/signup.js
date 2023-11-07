import React from "react";
import './signup.css'
function SignUp(props){
    return (
        <div className="signup-container">
            <form className="signup-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;