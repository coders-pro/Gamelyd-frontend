import { Routes, Route } from 'react-router-dom'
import './App.css'
import Games from './screens/Games/Games'
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='games' element={<Games />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
