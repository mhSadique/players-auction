import { Button, Card } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log('From Player', props)
    const { name, salary, image } = props.player;
    const playerStyle = {   width: '18rem', 
                            backgroundColor: '#ff6666',
                            height: '400px',
                        };
    return (
        <div>
            <Card style={playerStyle} className='m-3'>
                <Card.Img variant="top" height= '200px' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> Anuual Salary: ${salary}</Card.Text>
                    <Button 
                    onClick={() => props.handleAddPlayer(props.player)} 
                    variant="primary">Add to your club <FontAwesomeIcon icon={faPlus} /> 
                    </Button>
                </Card.Body>
                
                
            </Card>
        </div>
    );
};

export default Player;