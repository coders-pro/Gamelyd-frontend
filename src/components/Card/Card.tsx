import { Link } from 'react-router-dom'
import { CardStyle } from './CardStyle'

type Iprop = {
  rank: any
  gameName: any
  // image1: any
  // image2: any
  gamer1: any
  gamer2: any
  // mainImage: any
  tournamentId: any
}

const Card = (props: Iprop) => {
  return (
    <CardStyle>
      <div className='game'>
        <div className='rank'>{props.rank}</div>
        <div className='front'>
          <img className='thumbnail' src='/images/nba.jpg' alt='fifa' />
          <h3 className='name'>{props.gameName}</h3>
          <div className='stats'>
            <p className='viewers'>539.9k</p>
            <div className='streamers'>
              <img src='/images/fifa.jpg' alt='fifa' />
              <img src='/images/fifa.jpg' alt='fifa' />
              <img src='/images/fifa.jpg' alt='fifa' />
            </div>
          </div>
        </div>

        <div className='back'>
          <div className='streaming-info'>
            <p className='game-stat'>
              559k<span className='span'>Watching</span>
            </p>
            <p className='game-stat'>
              25.8k<span className='span'>Streams</span>
            </p>
          </div>
          <button className='btn'>
            <Link to={`/tournament/view/${props.tournamentId}`}>
              View Tournament
            </Link>
          </button>
          <div className='streamers'>
            <div className='streamer'>
              <div className='icon'>
                <img src='/images/fifa.jpg' alt='paid' />
              </div>
              <p className='name'> {props.gamer1}</p>
              <p className='number'>34.1k</p>
            </div>
            <div className='streamer'>
              <div className='icon'>
                <img src='/images/fifa.jpg' alt='paid' />
              </div>
              <p className='name'>{props.gamer2}</p>
              <p className='number'>36.1k</p>
            </div>
            <div className='streamer'>
              <div className='icon'>
                <img src='/images/fifa.jpg' alt='paid' />
              </div>
              <p className='name'>Gamer3</p>
              <p className='number'>22.6k</p>
            </div>
          </div>
        </div>
        <div className='background'></div>
      </div>
    </CardStyle>
  )
}

export default Card
