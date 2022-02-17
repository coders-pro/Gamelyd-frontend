import { Routes, Route } from 'react-router-dom'
import './App.css'
import Tournament from './screens/Tournament/Tournament'
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import './assets/css/fonts.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tournament' element={<Tournament />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
