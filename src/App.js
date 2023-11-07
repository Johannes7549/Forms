import './App.css';
import Login from './components/login/login';
import Header from './components/Header/header';
import SignUp from './components/signup/signup';
import Musics from './components/musics/musics';
import { useState } from 'react';
const musicData = [
  {
    mId: 1,
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    description: 'A song by the British rock band Queen.',
    Image: [],
  },
  {
    mId: 2,
    title: 'Hotel California',
    artist: 'Eagles',
    description: 'A song by the American rock band the Eagles.',
    Image: [],
  },
  {
    mId: 3,
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    description: 'A song by the English rock band Led Zeppelin.',
    Image: [],
  },
  {
    mId: 4,
    title: 'Imagine',
    artist: 'John Lennon',
    description: 'A song by English musician John Lennon.',
    Image: [],
  },
  {
    mId: 5,
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    description: 'A song by American singer-songwriter Bob Dylan.',
    Image: [],
  },
  {
    mId: 6,
    title: 'Teddy Afro',
    artist: 'Lebe Aysklshm',
    description: 'A song by American singer-songwriter Bob Dylan.',
    Image: [],
  }
];


function App() {
  let [showSignUp, setShowSignUp] =  useState(false)
  let [isLoggedIn, setIsLoggedIn]=useState(false)
  let [skipClicked,setSkip]=useState(false)

  function setShowSignUpPage(){
    setShowSignUp(!showSignUp)
  }
  function setSkipClicked(){
    setSkip(!skipClicked)
  }
  return (
    <div className="App">
      <Header setShowSignUp = {setShowSignUpPage} showSignUp= {showSignUp} skipClicked={skipClicked} setSkipClicked={setSkipClicked}></Header>
      {showSignUp && !skipClicked && <SignUp></SignUp>}
      {!showSignUp && !skipClicked && <Login></Login>}
      {/* <button>Create Music</button>
      {skipClicked && musicData.map((music)=>{
        return (
          <>
          <Musics 
          mId={music.mId}
          title = {music.title}
          artist = {music.artist}
          description = {music.description}
          ></Musics>
          </>
        )
      })} */}
    </div>
  );
}

export default App;
