import React from 'react';
import { CardStyle } from './CardStyle';

const Card = () => {
  return <CardStyle>
     <div className="game">
         <div className="rank">3</div>
        <div className="front">
            <img className='thumbnail' src='/images/nba.jpg' alt='fifa'/>
            <h3 className="name">Game Name</h3>
            <div className="stats">
                <p className="viewers">
                    539.9k
                </p>
                <div className="streamers">
                <img src='/images/fifa.jpg' alt='fifa'/>
                <img src='/images/fifa.jpg' alt='fifa'/>
                <img src='/images/fifa.jpg' alt='fifa'/>
                </div>
            </div>
        </div>

        <div className="back">
            <div className="streaming-info">
                <p className="game-stat">559k<span className='span'>Watching</span></p>
                <p className="game-stat">25.8k<span className='span'>Streams</span></p>
            </div>
            <button className="btn">See more streams</button>
            <div className="streamers">
                <div className="streamer">
                    <div className="icon"><img src='/images/fifa.jpg' alt='paid' /></div>
                    <p className="name"> Gamer1</p>
                    <p className="number">34.1k</p>
                </div>
                <div className="streamer">
                <div className="icon"><img src='/images/fifa.jpg' alt='paid' /></div>
                    <p className="name">Gamer2</p>
                    <p className="number">36.1k</p>
                </div>
                <div className="streamer">
                <div className="icon"><img src='/images/fifa.jpg' alt='paid' /></div>
                    <p className="name">Gamer3</p>
                    <p className="number">22.6k</p>
                </div>
            </div>
        </div>
        <div className="background">

        </div>

     </div>
  </CardStyle>;
};

export default Card;