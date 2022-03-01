import Navbar from '../../components/NavBar/Navbar'
import { Aboutted } from './Style'

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Aboutted>
          <div className='head'>
            <div className='sub-head'>
              <span>WHO ARE WE</span>
              <p>We help connect different types of gamers together</p>
            </div>
          </div>
          <div className='body'>
            <div className='sub-body'>
              <div className='text-div'>
                <div></div>
                <h3>OUR MISSION</h3>
                <p>
                  hdbdh hhdjd sssks bhdhd dndndn kskgassdf dfkrg sru
                  jsenfjeakherj jdshsjk
                </p>
              </div>

              <div className='img-div'>
                <img src='/images/nba.jpg' alt='j' />
              </div>
            </div>
            <div className='lower'></div>
          </div>
        </Aboutted>
      </div>
    </div>
  )
}

export default About
