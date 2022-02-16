import { Routes, Route } from 'react-router-dom'
import './App.css'
import Tournament from './screens/Tournament/Tournament'
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp'
import Showmore from './screens/Showmore/Showmore'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SingleTournament from './screens/Tournament/SingleTournament'
// import './assets/css/fonts.css';

function App() {
  return (
    <div className='App'>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tournament' element={<Tournament />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='tournament/:payment' element={<Showmore />} />
          <Route path='tournament/view/:id' element={<SingleTournament />} />
        </Routes>
      </ScrollToTop>
    </div>
  )
}

export default App
