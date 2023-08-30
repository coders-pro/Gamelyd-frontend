import React, { useEffect, useState } from "react";
import { SignupFormStyle } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { register } from "../../actions/userActions";
import { RootState } from "../../store.js";
import { Userstate } from "../../reducers/userReducer.js";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const SignupForm = () => {
  // signup state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [taken, setTaken] = useState(false);

  const [characters, setCharacters] = React.useState<string>("");

  async function search(criteria: string) {
    if (!criteria) {
      toast.error("username must be filled");
    } else {
      const response = await fetch(
        `https://gamelyd.onrender.com/users/checkUserName/${criteria}`
      );
      const body = await response.json();
      setCharacters(body.message);
      setTaken(body.hasError);
      return body.userName;
    }
  }

  const debouncedSearch = debounce(async (criteria: any) => {
    await search(criteria);
  }, 500);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      debouncedSearch(e.target.value);
      setUsername(e.target.value);
    }
  }

  let location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const redirect = location.search
  //   ? `${location.search.split('?')[1]}?open=true`
  //   : '/'

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector<RootState, Userstate>(
    (state) => state.userRegister
  );

  const { loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const signupHandler = (e: any) => {
    e.preventDefault();

    dispatch(
      register(
        signupEmail,
        signupPassword,
        username,
        firstName,
        lastName,
        phone
      )
    );
  };

  return (
    <SignupFormStyle>
      {loading && <ButtonLoader />}
      <div className="desktop">
        <form>
          <h3 style={{ color: "white" }}>Signup </h3>
          <div className="inpu">
            <div className="wrapper">
              <div className="input-data">
                <input type="text" onChange={handleChange} required></input>

                <label>Username</label>
                <div className="underline"></div>
                <div
                  style={{ color: taken ? "red" : "white" }}
                  className="character"
                >
                  {characters}
                </div>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                ></input>

                <label>First Name</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                ></input>

                <label>Last Name</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                ></input>

                <label>Email</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                ></input>

                <label>Phone Number</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                ></input>

                <label>Password</label>
                <div className="underline"></div>
              </div>
            </div>
          </div>
          <button
            className="submit"
            type="submit"
            onClick={(e) => signupHandler(e)}
          >
            Signup
          </button>
        </form>
      </div>

      <div className="mobile">
        <form>
          <h2>Signup</h2>
          <div className="inpu">
            <div className="wrapper">
              <div className="input-data">
                <input type="text" onChange={handleChange} required></input>

                <label>Username</label>
                <div className="underline"></div>
                <div
                  className="character"
                  style={{ color: taken ? "red" : "white" }}
                >
                  {characters}
                </div>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                ></input>

                <label>First Name</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                ></input>

                <label>Last Name</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                ></input>

                <label>Email</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                ></input>

                <label>Phone Number</label>
                <div className="underline"></div>
              </div>

              <div className="input-data">
                <input
                  type="password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                ></input>

                <label>Password</label>
                <div className="underline"></div>
              </div>

              <button
                className="submit"
                type="submit"
                onClick={(e) => signupHandler(e)}
              >
                Signup{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </SignupFormStyle>
  );
};

export default SignupForm;
