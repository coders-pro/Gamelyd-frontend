import { FooterStyle } from './styled'import { NavLink } from 'react-router-dom'


const Footer = () => {
  return <FooterStyle>     
    
 
<div className="flex-container">
  <div className='flexer'>
    <div className='about'>
    <h3>About Us</h3>
  <p>It includes rich features and contents. It's designed and developed based on One Page/ Multi-page Layout,blog themes,world press themes and blogspot. You can use any layout from any demo anywhere.</p>
   <p>Our company is completely creative, clean and 100% responsive website. Put your business into next level with us.</p>
        
    </div>
             </div>
  <div className='flexer'>
  <h3>Tags Widget</h3>
                            <ul className=" kilimanjaro_widget">
                                <li><NavLink to="/game">fifa</NavLink></li>
                                <li><NavLink to="/game">CODM</NavLink></li>
                                <li><NavLink to="/game">PUBG</NavLink></li>
                                <li><NavLink to="/game">Warzone</NavLink></li>
                                <li><NavLink to="/game">Multipurpose</NavLink></li>
                                <li><NavLink to="/game">Minimal</NavLink></li>
                                <li><NavLink to="/game">Classic</NavLink></li>
                                <li><NavLink to="/game">Medical</NavLink></li>
                            </ul>


  </div>

  <div className='flexer'> 
  <h3>Important Links</h3>
                        <ul className='kilimanjaro_links'>
                            <li><NavLink to="/create">Create new game</NavLink></li>
                            <li><NavLink to="/create">Development</NavLink></li>
                            <li><NavLink to="/create">Terms and Conditions</NavLink></li>
                            <li><NavLink to="/create">Help</NavLink></li>
                            <li><NavLink to="/create">Policy</NavLink></li>
                        </ul></div>
  <div className='flexer'>
    <div className='conta'>
       <h3>Quick Contact</h3>
    <h4>Phone: </h4>
    <p>+1(975)-457-5420</p>
    <p>+1(975)-457-5420</p>
    <h4>Email: </h4>
    <p>big@ballz.nutz</p>
    <h4>Social Links</h4>
                            <ul className="kilimanjaro_social_links"> 
                                <li><a href ="facebook.com"  target='_blank'rel='noopener noreferrer'><i className="fab fa-facebook" ></i> Facebook</a></li>
                                <li><a href="twitter.com" target='_blank'rel='noopener noreferrer'><i className="fab fa-twitter" ></i> Twitter</a></li>
                                <li><a href="pinterest.com" target='_blank'rel='noopener noreferrer'><i className="fab fa-pinterest" ></i> Pinterest</a></li>
                                <li><a href="Linkedin.com" target='_blank'rel='noopener noreferrer'><i className="fab fa-linkedin" ></i> Linkedin</a></li>
                            </ul>
    </div>


   </div>  
   
    </div>
    <div className='last'>
    © 2015-2022 BATTLESTATE GAMES LIMITED. ALL RIGHTS RESERVED.
    </div>
    </FooterStyle>
}

export default Footer
