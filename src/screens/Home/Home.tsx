import { useState } from 'React'
import { HomeStyle } from './style.js'
import ImageRotate from '../../components/ImageRotate/ImageRotate'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import { motion } from "framer-motion"
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Home = () => {
  const [shouldShowAction, setshouldShowAction] =  React.useState(false);
  const [lastYPos,  setlastYPos] = React.useState(0);
  React.useEffect(() => {
    function handleScroll() {
    const yPos = window.scrollY;
    const isScrollingUp = yPos < lastYPos;
    setshouldShowAction(isScrollingUp);
    setlastYPos(yPos);
    }
    window.addEventListener('scroll', handleScroll, false);
  return () => {
    window.addEventListener('scroll', handleScroll, false);

  };

  }, [lastYPos]);
  return (

    <>
      <Navbar message='jh' />
      <HomeStyle>
        <Hero />

        <div className='free'>
          <div className='text'>
            <h2>Free</h2>  
            <div className='flex-container'>
          
           
 <motion.div 
  animate={{
    x: shouldShowAction ? '115px' : 0 , 
    opacity: shouldShowAction ? 0.7 : 0.1,
  }}
  initial={{opacity:0}}


  transition={{
    type: 'spring',
   stiffness: 20,
   damping:  5,
  
  }}
>
<SportsEsportsIcon sx={{ fontSize: 130 }}  />
<div className='box'>
  <div className='p1'> Free Sessions  </div> <br></br>
  <div className='p2'> get 10 free sections daily </div>
  
  
</div>

</motion.div>

 <motion.div
  animate={{
    x: shouldShowAction ? '-115px' : 0 , 
    opacity: shouldShowAction ? 0.7 : 0.1,
  }}
  initial={{opacity:0}}


  transition={{
    type: 'spring',
    stiffness: 20,
    damping:  5,
  
  }}
>
<EmojiEventsIcon sx={{ fontSize: 130 }}  />
<div className='box'>
<div className='p1'> Get Rewerded  </div> <br></br>
  <div className='p2'> Winner get  a good peice of ass sections daily </div>
  
</div>

</motion.div>

      
          </div>
          <div className='flex-containerphone '>
           
           <motion.div 
            animate={{
              y: shouldShowAction ? '85px' : 0 , 
              opacity: shouldShowAction ? 0.7 : 0.1,
            }}
            initial={{opacity:0}}
          
          
            transition={{
              type: 'tweem',
             duration: '1'
            
            }}
          >
          <SportsEsportsIcon sx={{ fontSize: 130 }}  />
          <div className='box'>
            <div className='p1'> Free Sessions  </div> <br></br>
            <div className='p2'> get 10 free sections daily </div>
            
            
          </div>
          
          </motion.div>
          
           <motion.div
            animate={{
              y: shouldShowAction ? '85px' : 0 , 
              opacity: shouldShowAction ? 0.7 : 0.1,
            }}
            initial={{opacity:0}}
          
          
            transition={{
              type: 'tweem',
             duration: '1'
            
            }}
          >
          <EmojiEventsIcon sx={{ fontSize: 130 }}  />
          <div className='box'>
          <div className='p1'> Get Rewerded  </div> <br></br>
            <div className='p2'> Winner get  a good peice of ass   </div>
            
          </div>
          </motion.div>
                    </div>
          </div>
          <div className='image'></div>
        </div>

        <div className='sponsored'>
          <div className='image'></div>
          <div className='text'>
            <h2>Free</h2>  
            <div className='flex-container'>
          
           
 <motion.div 
  animate={{
    x: shouldShowAction ? '115px' : 0 , 
    opacity: shouldShowAction ? 0.7 : 0.1,
  }}
  initial={{opacity:0}}


  transition={{
    type: 'spring',
   stiffness: 20,
   damping:  5,
  
  }}
>
<AttachMoneyIcon  sx={{ fontSize: 130 }}  />
<div className='box'>
  <div className='p1'> Win Big  </div> <br></br>
  <div className='p2'> play and win for real </div>
  
  
</div>

</motion.div>

 <motion.div
  animate={{
    x: shouldShowAction ? '-115px' : 0 , 
    opacity: shouldShowAction ? 0.7 : 0.1,
  }}
  initial={{opacity:0}}


  transition={{
    type: 'spring',
    stiffness: 20,
    damping:  5,
  
  }}
>
<EmojiEventsIcon sx={{ fontSize: 130 }}  />
<div className='box'>
<div className='p1'> Get Rewerded  </div> <br></br>
  <div className='p2'> Winner get  a good peice of ass sections daily </div>
  
</div>

</motion.div>

      
          </div>
          <div className='flex-containerphone '>
           
           <motion.div 
            animate={{
              y: shouldShowAction ? '85px' : 0 , 
              opacity: shouldShowAction ? 0.7 : 0.1,
            }}
            initial={{opacity:0}}
          
          
            transition={{
              type: 'tweem',
             duration: '1'
            
            }}
          >
          <AttachMoneyIcon  sx={{ fontSize: 130 }}  />
          <div className='box'>
           
  <div className='p1'> Win Big  </div> <br></br>
  <div className='p2'> play and win for real </div>
            
          </div>
          
          </motion.div>
          
           <motion.div
            animate={{
              y: shouldShowAction ? '85px' : 0 , 
              opacity: shouldShowAction ? 0.7 : 0.1,
            }}
            initial={{opacity:0}}
          
          
            transition={{
              type: 'tweem',
             duration: '1'
            
            }}
          >
          <EmojiEventsIcon sx={{ fontSize: 130 }}  />
          <div className='box'>
          <div className='p1'> Get Rewerded  </div> <br></br>
            <div className='p2'> Winner get  a good peice of ass   </div>
            
          </div>
          </motion.div>
                    </div>
          </div>
        </div>
      </div>

      <div className='text-right'>
        <div className='image'>
          <img src='/images/soldier1.jpg' alt='soldier1' />
        </div>
        <div className='text'>
          <h2>Sponsored</h2>
          <p>
            Multiplayer games that allows u to play with others and fly around
            like a baddie and then woo all the chicks in town and later
            terminate their ass with your weapon of mass destruction.
          </p>
        </div>
      </div>

      <div className='text-left'>
        <div className='text'>
          <h2>Paid</h2>
          <p>
            Multiplayer games that allows u to play with others and fly around
            like a baddie and then woo all the chicks in town and later
            terminate their ass with your weapon of mass destruction.
          </p>
        </div>
        <div className='imagerotate'>
          <ImageRotate />
        </div>
      </div>

      <div className='text-right'>
        <div className='image'>
          <img src='/images/soldier2.jpg' alt='soldier2' />
        </div>
        <div className='text'>
          <h2>Multiplayer</h2>
          <p>COMING SOON</p>
        </div>
      </div>

      <div className='text-left'>
        <div className='text'>
          <h2>Battle Royale</h2>
          <p>
            Multiplayer games that allows u to play with others and fly around
            like a baddie and then woo all the chicks in town and later
            terminate their ass with your weapon of mass destruction.
          </p>
        </div>
        <div className='imagerotate'>
          <ImageRotate />
        </div>
      </div>
    </HomeStyle>
  )
}

export default Home
