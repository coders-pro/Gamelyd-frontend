import { HomeStyle } from './style.js'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import Scroll from '../../components/Scroll/Scroll.js'
import Scroll2 from '../../components/Scroll/Scroll2.js'
import Scroll3 from '../../components/Scroll/Scroll3.js'
import Scroll4 from '../../components/Scroll/Scroll4.js'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';



const Home = () => {

  return (
    <>
      <Navbar message='jh' />
      <HomeStyle>
        <Hero pic1={'/images/soldier7.png'} pic2={'/images/soldier14.png'} background={'/images/soldier7.png'} message='WELCOME ABOARD SOLDIER' time='TIME TO CONNECT'/>

        <Scroll>
          <div className='free'>
            <div className='text'>
              <h2>Free</h2>
              <div className='flex-container'>
              <Scroll2>
                <SportsEsportsIcon sx={{ fontSize: 130 }}  />
                 <div className='box'>
           
           <div className='p1'> Free Sessions  </div> <br></br>
           <div className='p2'> get 10 free sections daily </div>
         </div>
              </Scroll2>
         <Scroll3>
           <EmojiEventsIcon sx={{ fontSize: 130 }}  />
         <div className='box'>
           
         <div className='p1'> Get Rewerded  </div> <br></br>
           <div className='p2'> Winner get  a good peice of ass sections daily </div>
           
         </div>
         
         </Scroll3>
                   </div>
                   <Scroll4>
                   <div className='flex-containerphone '>

                   <SportsEsportsIcon sx={{ fontSize: 130 }}  />
                 <div className='box'>
           
           <div className='p1'> Free Sessions  </div> <br></br>
           <div className='p2'> get 10 free sections daily </div>
         </div>

         <EmojiEventsIcon sx={{ fontSize: 130 }}  />
         <div className='box'>
           
         <div className='p1'> Get Rewerded  </div> <br></br>
           <div className='p2'> Winner get  a good peice of ass sections daily </div>   
         </div>
         
                   </div>
         </Scroll4>
            </div>
            <div className='image'></div>
          </div>
        </Scroll>

        <Scroll>
          <div className='sponsored'>
            <div className='image'></div>
            <div className='text'>
              <h2>Sponsored</h2>
              <div className='flex-container'>
              <Scroll2>
                <AttachMoneyIcon   sx={{ fontSize: 130 }}  />
                 <div className='box'>
                  
  <div className='p1'> Win Big  </div> <br></br>
  <div className='p2'> play and win for real </div>
         </div>
              </Scroll2>
         <Scroll3>
           <MilitaryTechIcon sx={{ fontSize: 130 }}  />
         <div className='box'>
           
         <div className='p1'> Rank up  </div> <br></br>
           <div className='p2'> Rank up and claim braging rifht with friendsly </div>
           
         </div>
         
         </Scroll3>
                   </div>
                   <Scroll4>
                   <div className='flex-containerphone '>

                   <AttachMoneyIcon   sx={{ fontSize: 130 }}  />
                 <div className='box'>
                    
  <div className='p1'> Win Big  </div> <br></br>
  <div className='p2'> play and win for real </div>
         </div>

         <MilitaryTechIcon sx={{ fontSize: 130 }}  />
         <div className='box'>
           
         <div className='p1'> Rank up  </div> <br></br>
           <div className='p2'> Rank up and claim braging right with friends </div>
         </div>
         
                   </div>
         </Scroll4>
            </div>
          
          </div>
        </Scroll>

        <Scroll>
          <div className='paid'>
            <div className='text'>
              <h2>Paid</h2>
              <p>
                Multiplayer games that allows u to play with others and fly
                around like a baddie and then woo all the chicks in town and
                later terminate their ass with your weapon of mass destruction.
              </p>
            </div>
            <div className='image'></div>
          </div>
        </Scroll>

        <Scroll>
          <div className='multiplayer'>
            <div className='image'></div>
            <div className='text'>
              <h2>Multiplayer</h2>
              <p>COMING SOON</p>
            </div>
          </div>
        </Scroll>

        <Scroll>
          <div className='battle'>
            <div className='text'>
              <h2>Battle Royale</h2>
              <p>
                Multiplayer games that allows u to play with others and fly
                around like a baddie and then woo all the chicks in town and
                later terminate their ass with your weapon of mass destruction.
              </p>
            </div>
            <div className='image'></div>
          </div>
        </Scroll>

        <div className='imagerotate'>
          <ImageRotate />
        </div>
      </HomeStyle>
      <Footer />
    </>
  )
}

export default Home
