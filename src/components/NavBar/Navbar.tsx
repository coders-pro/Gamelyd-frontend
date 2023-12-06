import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "./style";
import StrikeButton from "./Button";
import Button from "../Button";
import { toast } from "react-toastify";
import { User } from "../../User";

const Navbar = ({ message }: { message: string }) => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPosition = useRef<number>(window.scrollY);
  // const [display, setDisplay] = useState(false);
  const [background, setBackground] = useState("#1f262f");
  const [logo, setLogo] = useState("logoWhite");
  const [toggle, setToggle] = useState("translateX(100%)");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("1");
  const [line3, setLine3] = useState("");
  const [transit, setTransit] = useState(0);
  const [user, setUser] = useState(false);
  const display = useRef(false);

  const userInfo = User().get();

  useEffect(() => {
    if (userInfo?.user) {
      setUser(true);
    }
  }, [userInfo]);

  const checkScroll = () => {
    // setScrollPosition(window.pageYOffset);
    scrollPosition.current = window.scrollY;
    scrollAction();
  };

  const scrollAction = () => {
    if (scrollPosition.current <= 20) {
      setBackground("#1f262f");
      setLogo("logoWhite");
    } else {
      setBackground("rgba(0, 0, 0, 0.281)");
      setLogo("logo");
    }
  };

  const onClickButton = () => {
    change();
    // setDisplay(true)

    // setDisplay((prevState) => !prevState);
    display.current = !display.current;
    console.log("display", display.current);
  };

  const onClickBackdrop = () => {
    // setDisplay(false);
    display.current = false;
    setToggle("translateX(100%)");
    setLine1("");
    setLine2("1");
    setLine3("");
  };

  const logout = () => {
    User().clear();
    window.location.href = `/signup`;
    toast.success("Logout successfull");
  };

  const change = () => {
    if (display.current) {
      setToggle("translateX(0%)");
      setLine1("rotate(-45deg) translate(-4px,6px)");
      setLine2("0");
      setLine3("rotate(45deg) translate(-4px,-6px)");
    } else {
      setToggle("translateX(100%)");
      setLine1("");
      setLine2("1");
      setLine3("");
    }
  };

  const styleContain = {};
  window.onscroll = () => checkScroll();

  useEffect(() => {
    window.onscroll = () => checkScroll();
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <NavStyle transform={toggle}>
      {display.current ? (
        <div onClick={onClickBackdrop} className="backdrop"></div>
      ) : null}
      <div style={{ ...styleContain, background }} className="container">
        <div className="container_box">
          <div className="logo">
            <NavLink to="/">
              <img src={`/images/logos/${logo}.png`} alt="muna" />
            </NavLink>
          </div>
          <div className="nav_items">
            {user && (
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "4px solid white",
                        color: "white",
                      }
                    : {}
                }
                to="/tournaments"
                className="single_item"
              >
                Tournaments<span></span>
              </NavLink>
            )}

            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "4px solid white",
                      color: "white",
                    }
                  : {}
              }
              to="/"
              className="single_item"
            >
              Connect With Friends<span></span>
            </NavLink>

            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "4px solid white",
                      color: "white",
                    }
                  : {}
              }
              to="/contact-us"
              className="single_item"
            >
              Contact Us<span></span>
            </NavLink>
          </div>
        </div>

        <div className="end">
          {!user && (
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "4px solid white",
                      color: "white",
                    }
                  : {}
              }
              to="/signup"
              className="single_item"
            >
              Contact Us<span></span>
            </NavLink>
          )}

          {user && (
            <div onClick={logout} className="single_item">
              Logout<span></span>
            </div>
          )}

          <Button>Get Started</Button>
        </div>

        <div className="nav_items_mobile">
          <NavLink
            to="/"
            className="single_item"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(11, 192, 180)",
                  }
                : {}
            }
            onClick={onClickBackdrop}
          >
            Home
          </NavLink>
          {user && (
            <NavLink
              to="/tournaments"
              className="single_item"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "rgb(11, 192, 180)",
                    }
                  : {}
              }
              onClick={onClickBackdrop}
            >
              Tournaments
            </NavLink>
          )}
          {user && (
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "rgb(11, 192, 180)",
                    }
                  : {}
              }
              to={`/profile/${localStorage.getItem("id")}`}
              className="single_item"
            >
              Profile<span></span>
            </NavLink>
          )}
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(11, 192, 180)",
                  }
                : {}
            }
            to="/contact-us"
            className="single_item"
          >
            Contact Us<span></span>
          </NavLink>

          {!user && (
            <a href="/signup" className="discord" onClick={logout}>
              <button>Sign In</button>
            </a>
          )}
          {user && (
            <a href="#" className="discord" onClick={logout}>
              <button>Logout</button>
            </a>
          )}
        </div>
      </div>

      <StrikeButton
        click={onClickButton}
        line1={line1}
        line2={line2}
        line3={line3}
      />
    </NavStyle>
  );
};

export default Navbar;
