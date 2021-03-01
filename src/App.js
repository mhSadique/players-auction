import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import playersData from './Data/data.json';
import { useEffect, useState } from 'react';
import PlayersInYourClub from './components/PlayersInYourClub/PlayersInYourClub';

function App() {
  
  const [players, setPlayers] = useState([]);
  const [playersInClub, setPlayersInClub] = useState([]);
  const handleAddPlayer = (player) => {
    const newPlayersInClub = [...playersInClub, player];
    setPlayersInClub(newPlayersInClub);
    console.log(newPlayersInClub)
    return newPlayersInClub;
  };

  useEffect(() => {setPlayers(playersData)}, []);
  return (
    <div className="App">
      <Header></Header>
      <PlayersInYourClub playersInClub={playersInClub}></PlayersInYourClub>
      <div className='row'>
      {
        players.map((player) => <Player 
        player={player}
        handleAddPlayer = {handleAddPlayer}
        ></Player>)
      }
      </div>
      
    </div>
  );
}

export default App;
