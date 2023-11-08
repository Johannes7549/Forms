import './App.css';
import Login from './components/login/login';
import Header from './components/Header/header';
import SignUp from './components/signup/signup'; 
import { useState } from 'react';


function App() {
  let [showSignUp, setShowSignUp] =  useState(false)
  let [skipClicked,setSkip]=useState(false)
  function setIsLoggedIn(value){
    console.log(value)
  }
  function setShowSignUpPage(){
    setShowSignUp(!showSignUp)
  }
  function setSkipClicked(){
    setSkip(!skipClicked)
  }
  return (
    <div className="App">
      {setIsLoggedIn()}
      <Header setShowSignUp = {setShowSignUpPage} showSignUp= {showSignUp} skipClicked={skipClicked} setSkipClicked={setSkipClicked}></Header>
      {showSignUp && !skipClicked && <SignUp></SignUp>}
      {!showSignUp && !skipClicked && <Login></Login>}
    </div>
  );
}

export default App;
