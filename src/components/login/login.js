import React, { useEffect, useState,useReducer } from "react";
import './login.css'
import {auth} from '../../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'

let emailreducer = (state, action) => {
  switch (action.type) {
    case 'email_input':
      return {value:action.val, emailValid:undefined}
    case "email_validate":
      return {value:action.val, emailValid:action.val.includes('@')}
  }
};

let passreducer = (state, action) => {
  switch (action.type) {
    case 'password_input':
      return {value:action.val, passvalid:action.val.trim().length>8}

  }

};

function Login(props){
  // let [enteredEmail, setenteredEmail] = useState('');
  // let [enteredPassword, setenteredPassword] = useState('');
  // let [emailValid, setemailValid] = useState();
  // let [passwordValid, setpasswordValid] = useState();
  let [formValid, setformValid] = useState(false);

  const [emailState, emaildispatcher] = useReducer(emailreducer, {value:'', emailValid:undefined});
  const [passstate, passdispatcher] = useReducer(passreducer, {value:'', passvalid:undefined});

  useEffect(() => {
    setformValid(emailState.emailValid && passstate.passvalid)
  }, [emailState.emailValid, passstate.passvalid]);

  function changeEmail(event){
    emaildispatcher({val:event.target.value, type:'email_input'})
  }

  function validateEmail(){
    emaildispatcher({val:emailState.value, type:'email_validate'})
  }

  function changePassword(event){
    passdispatcher({val:event.target.value, type:'password_input'})
  }
  
  // function validatepassword(){
  //   passdispatcher({val:passstate.value, type:'password_validate'})
  // }

  async function submitHandler(event){  
    event.preventDefault();
      try {
          console.log(emailState.value, passstate.value);
          return await createUserWithEmailAndPassword(auth, emailState.value, passstate.value);
      } catch (error) {
          console.error(error);
      }
  
    
  }

    return (
      <>
      <div className="login-container">
        <form className="login-form" onSubmit={submitHandler}>
          <h2>Login</h2>
          <input 
              type="text" 
              className={`form-control ${emailState.emailValid===false ? 'is-invalid' : ''}`} 
              placeholder="Email" 
              onChange={changeEmail} 
              onBlur={validateEmail}
              value={emailState.value}/>
          <input type="password" id="password" value={passreducer.value} className={`form-control ${passstate.passvalid===false ? 'is-invalid' : ''}`}   placeholder="Password" onChange={changePassword} />
          <button type="submit">Login</button>
        </form>
      </div>
      </>
    )
    
}

export default Login;