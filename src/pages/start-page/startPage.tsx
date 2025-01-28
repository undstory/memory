import React, { useState } from 'react';
import './startPage.scss';
import { Button } from '../../components/ui/button';
import { Link } from "react-router";
import { useNavigate } from "react-router";

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const [ settings, setSettings ] = useState({
    theme: 'Numbers',
    players: '1',
    grid: 'small'
  })

  const handleSelect = (category: 'theme' | 'players' | 'grid', value: string) => {
    setSettings((prev) => ({
      ...prev,
      [category]: value
    }))

  }


  const handleGame = () => {
    navigate("/game")
  }

  return (
    <div className="big-container">
      <div className='content-wrapper'>
      <h1 className='main-header'>memory</h1>
      <div className='box-wrapper'>
        <p className='labels'>Select Theme</p>
        <div className='button-container'>
          {['Numbers', 'Icons'].map((item) => (
          <Button key={item}
            className={`button-selection ${settings.theme === item ? 'active' :''}`}
            label={item}
            onClick={() => handleSelect('theme', item)} />
          ) )
        }

        </div>

        <p className='labels'>Numbers of players</p>
        <div className='button-container'>
          {['1', '2', '3', '4'].map((item) => (
            <Button className={`button-secondary ${settings.players === item ? 'active' : ''}`}
              label={item}
              key={item}
              onClick={() => handleSelect('players', item)}
              />
          ))}
        </div>
        <p className='labels'>Grid size</p>
        <div className='button-container'>
          {['small', 'large'].map((item) => (
            <Button
            className={`button-selection ${settings.grid === item ? 'active' : '' }`}
            label={item}
            key={item}
            onClick={() => handleSelect('grid', item)}
            />
          ))

          }
        </div>
        <Button className="button-big" onClick={handleGame} label='Start Game' />
      </div>
      </div>
    </div>
  ) ;
};

export default StartPage;