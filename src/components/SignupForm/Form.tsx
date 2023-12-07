import React, { useEffect, useState } from "react";
import { SignupFormStyle } from "./style";
import { useNavigate, useLocation } from "react-router-dom";

import ButtonLoader from "../Loader";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { User } from "../../User";
import { useApi } from "../../api";
import Button from "../Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface propType {
  flip: any;
}

const SignupForm = ({ flip }: propType) => {
  // signup state
  const [signupEmail, setSignupEmail] = useState("");
  const [criteria, setCriteria] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [taken, setTaken] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type1, setType1] = useState<any>("password");
  const [type2, setType2] = useState<any>("password");
  const [type3, setType3] = useState<any>("password");

  const [characters, setCharacters] = React.useState<string>("");

  async function search(criteria: string) {
    if (!criteria) {
      toast.error("username must be filled");
    } else {
      const response = await fetch(
        `https://gamelyd-test.onrender.com/users/checkUserName/${criteria}`
      );
      const body = await response.json();
      setCharacters(body.message);
      setTaken(body.hasError);
      return body.userName;
    }
  }

  const debouncedSearch = debounce(async (criteria: any) => {
    console.log(criteria);

    await search(criteria);
  }, 500);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.value) {
      debouncedSearch(e.target.value);
      setUsername(e.target.value);
    }
  }

  const { call: debounceCall } = useApi({
    route: `users/checkUserName/${criteria}`,
    method: "POST",
  });
  let location = useLocation();

  const navigate = useNavigate();

  // const redirect = location.search
  //   ? `${location.search.split('?')[1]}?open=true`
  //   : '/'

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const { state, isPending, error, call, clearState } = useApi({
    route: `users/signup`,
    method: "POST",
    callback: (res: any) => {
      User().save({
        user: res?.data,
      });
      if (res.hasError) {
        toast.error(res.message);
      } else {
        localStorage.setItem("id", res.data.ID);
        localStorage.setItem("first", res.data.first_name);
        localStorage.setItem("last", res.data.last_name);
        localStorage.setItem("user", res.data.user_name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("phone", res.data.phone);
        localStorage.setItem("token", res.data.token);
      }
    },
  });

  const userInfo = User().get();

  useEffect(() => {
    if (userInfo?.user) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const signupHandler = (e: any) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      toast.error("password must match confirm password");
    } else {
      call({
        body: {
          Email: signupEmail,
          Password: signupPassword,
          User_name: username,
          First_name: firstName,
          Last_name: lastName,
          Phone: phone,
          User_type: "USER",
        },
      });
    }
  };

  return (
    <SignupFormStyle>
      {isPending && <ButtonLoader />}
      <form className="form">
        <div className="inputs">
          <div className="wrapper">
            <div className="input-data">
              <input
                type="text"
                onChange={handleChange}
                className="inputText2"
                required
                placeholder="Username"
              ></input>
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
                className="inputText2"
                placeholder="First Name"
              ></input>
            </div>

            <div className="input-data">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="inputText2"
                placeholder="Last Name"
              ></input>
            </div>

            <div className="input-data">
              <input
                type="text"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
                className="inputText2"
                placeholder="Email"
              ></input>
            </div>

            <div className="input-data">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="inputText2"
                placeholder="Phone Number"
              ></input>
            </div>

            <div className="input-data">
              <input
                type={type2}
                className="inputText2"
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Password"
              ></input>

              {type2 === "text" && (
                <VisibilityOffIcon
                  onClick={() =>
                    setType2(type2 === "password" ? "text" : "password")
                  }
                  style={{ color: "rgb(11, 192, 180)" }}
                  className="eye"
                />
              )}
              {type2 === "password" && (
                <VisibilityIcon
                  onClick={() =>
                    setType2(type2 === "password" ? "text" : "password")
                  }
                  style={{ color: "black" }}
                  className="eye"
                />
              )}
            </div>

            <div className="input-data">
              <input
                type={type3}
                className="inputText2"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              ></input>
              {type3 === "text" && (
                <VisibilityOffIcon
                  onClick={() =>
                    setType3(type3 === "password" ? "text" : "password")
                  }
                  style={{ color: "rgb(11, 192, 180)" }}
                  className="eye"
                />
              )}
              {type3 === "password" && (
                <VisibilityIcon
                  onClick={() =>
                    setType3(type3 === "password" ? "text" : "password")
                  }
                  style={{ color: "black" }}
                  className="eye"
                />
              )}
            </div>
          </div>
        </div>
        <div className="bt">
          <Button onClick={(e: any) => signupHandler(e)}>Signup</Button>
        </div>
        <div className="already">
          Already have an account?{" "}
          <span className="lin" onClick={() => flip()}>
            Sign In
          </span>
        </div>
      </form>
    </SignupFormStyle>
  );
};

export default SignupForm;
