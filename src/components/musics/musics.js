import React from "react";
import './musics.css';
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

];
function Musics(props){
    return (
        
        <>
        {console.log("Music component executed")}
        <div className="music-page">
          <div className="music-list">
            <div className="music-item">
              <img src="" alt="Music 1"/>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
              <div className="editDelete">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
        </>
      );
}

export default Musics;