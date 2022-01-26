import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Games from './screens/Games/Games'
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp'

function App() {
  return (
    <div className='App'>
      {/* <Navbar message='you' /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='games' element={<Games />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
