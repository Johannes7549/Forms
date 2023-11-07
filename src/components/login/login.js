import React, { useEffect, useRef } from "react";
import './login.css'
function Login(){
  let username = useRef();
  let password = useRef();
  function handleUsernameClick(event){
    console.log(event.target.value)
  }
  function handlePasswordClick(event){
    console.log(event.target.value)
  }
    return (
        // <h2>This is my login page</h2>
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Username" ref={username} onChange={handleUsernameClick} />
          <input type="password" placeholder="Password" ref={password} onChange={handlePasswordClick}/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
    
}
export default Login;