import React from 'react';
import { Button } from '../../components/ui/button';

const Game: React.FC = () => {
 return (
    <div className="big-container">
        <div className='content-wrapper'>
            <div>
                <h1 className='main-header'>Memory</h1>
                <div>
                    <Button label="Restart" onClick={() => console.log('Restart')}/>
                    <Button label="New Game" onClick={() => console.log('New Game')} />
                </div>
            </div>
        </div>
    </div>
 )
}

export default Game;