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
import Contact from "./screens/Contactus/index";
import About from "./screens/About/About";
import Privacy from "./screens/Privacy/index";
import Terms from "./screens/Terms/index";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import ResetPassword from "./screens/ResetPassword/ResetPassword";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme"; // Import your theme
import CreateTournament from "./screens/CreateTournament";
import Tournaments from "./screens/Tournaments";
import TournamentView from "./screens/SingleTournament";

// import './assets/css/fonts.css';

axios.interceptors.response.use(
  function (successRes) {
    // ... modify response;
    if (
      successRes.data.message === "token expired" ||
      successRes.data.message === "No Authorization header provided"
    ) {
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
          {/* <Route path="tournaments" element={<Tournament />} /> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword/:token" element={<ResetPassword />} />
          {/* <Route path="tournament/:payment" element={<Showmore />} /> */}
          <Route path="tournament/view/:id" element={<SingleTournament />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="display" element={<DisplayModal />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="policy" element={<Privacy />} />
          <Route path="tournament/new/" element={<CreateTournament />} />
          <Route path="tournament/all/" element={<Tournaments />} />
          <Route path="tournament/:id" element={<TournamentView />} />
        </Routes>
        <ToastContainer />
      </ScrollToTop>
    </div>
  );
}

export default App;
