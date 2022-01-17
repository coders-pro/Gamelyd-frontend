import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Games from './screens/Games/Games'
import Home from './screens/Home/Home'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='games' element={<Games />} />
      </Routes>
    </div>
  )
}

export default App
