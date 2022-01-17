import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => (
  <div className='navbar'>
    <Link to='/'>Home</Link>
    <Link to='/games'>Games</Link>
  </div>
)
export default Navbar
