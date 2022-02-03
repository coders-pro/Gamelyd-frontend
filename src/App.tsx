import { Routes, Route } from 'react-router-dom'
import './App.css'
import Tournament from './screens/Tournament/Tournament'
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tournament' element={<Tournament />} />
        <Route path='signup' element={<SignUp />} />

      </Routes>
    </div>
  )
}

export default App
