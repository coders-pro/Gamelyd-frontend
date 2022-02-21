import { Routes, Route } from "react-router-dom";
import "./App.css";
import Tournament from "./screens/Tournament/Tournament";
import Home from "./screens/Home/Home";
import SignUp from "./screens/SignUp/SignUp";
import Showmore from "./screens/Showmore/Showmore";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DisplayModal from "./components/DisplayModal/DisplayModal";
import SingleTournament from "./screens/Tournament/SingleTournament";
import Profile from "./screens/Profile/profile";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
// import './assets/css/fonts.css';

axios.interceptors.response.use(
  function (successRes) {
    // ... modify response;
    if (successRes.data.message === "token expired") {
      localStorage.setItem("id", "");
      localStorage.setItem("first", "");
      localStorage.setItem("last", "");
      localStorage.setItem("user", "");
      localStorage.setItem("token", "");
      window.location.href = `/signup?redirect=${window.location.pathname}`;
      toast.error(successRes.data.message);
    }

    return successRes;
  },
  function (error: any) {
    // ...
    return Promise.reject(error);
  }
);

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tournament" element={<Tournament />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="tournament/:payment" element={<Showmore />} />
          <Route path="tournament/view/:id" element={<SingleTournament />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="display" element={<DisplayModal />} />
        </Routes>
        <ToastContainer />
      </ScrollToTop>
    </div>
  );
}

export default App;
