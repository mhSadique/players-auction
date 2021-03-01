import React from 'react';
import './PlayersInYourClub.css'
const PlayersInYourClub = (props) => {
    console.log(props)
    const players = props.playersInClub;
    const budget = players.reduce((total, player) => total + player.salary , 0)
    // cost total = cart.reduce(( => ))
    return (
        <div className='players-in-club'>
            <h2>Your have selected the following players for your club</h2>
            <ul>
                {
                    players.map(player => <li>{player.name} (Salary: {player.salary})</li>)
                }
            </ul>
            <h3>Your budget should be ${budget}</h3>

            
        </div>
    );
};

export default PlayersInYourClub;