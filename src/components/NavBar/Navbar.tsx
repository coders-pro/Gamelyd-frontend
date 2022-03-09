import React from "react";
import { NavLink } from "react-router-dom";

import { NavStyle } from "./style";
import Button from "./Button";
import { toast } from "react-toastify";
// import logo from '../../assets/images/hori.png'

type IProps = {
  message: string;
};

type IState = {
  scrollPosition: number;
  display: boolean;
  background: string;
  toggle: string;
  line1: string;
  line2: string;
  line3: string;
  transit: number;
  user: boolean;
  logo: string;
};

class Navbar extends React.Component<IProps, IState> {
  state = {
    scrollPosition: 0,
    display: false,
    background: "",
    logo: "logoWhite",
    toggle: "translateX(100%)",
    line1: "",
    line2: "1",
    line3: "",
    transit: 0,
    user: false,
  };

  componentDidMount() {
    // if(localStorage.getItem(user))
    if (localStorage.getItem("user")) {
      this.setState({
        user: true,
      });
    }
  }

  /* This section controls the NavBar fade on Scroll*/
  checkScroll = () => {
    this.setState(
      {
        scrollPosition: window.pageYOffset,
      },
      this.scrollAction
    );
  };

  scrollAction = () => {
    if (this.state.scrollPosition > 50) {
      this.setState({
        background: "rgba(0,0,0,0.5)",
        logo: "logo",
      });
    } else {
      this.setState({
        background: "transparent",
        logo: "logoWhite",
      });
    }
  };
  /* The above section controls the NavBar fade on Scroll*/

  /*  Code below controls the Hamburger Menu Button */

  onClickButton = () => {
    this.setState(
      (prevState) => ({
        display: !prevState.display,
      }),
      this.change
    );
  };

  onClickBackdrop = () => {
    this.setState({
      display: false,
      toggle: "translateX(100%)",
      line1: "",
      line2: "1",
      line3: "",
    });
  };
  logout = () => {
    localStorage.setItem("id", "");
    localStorage.setItem("first", "");
    localStorage.setItem("last", "");
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    window.location.href = `/signup`;
    toast.success("Logout successfull");
  };

  change = () => {
    if (this.state.display === true) {
      this.setState({
        toggle: "translateX(0%)",
        line1: "rotate(-45deg) translate(-4px,6px)",
        line2: "0",
        line3: "rotate(45deg) translate(-4px,-6px)",
      });
    } else {
      this.setState({
        toggle: "translateX(100%)",
        line1: "",
        line2: "1",
        line3: "",
      });
    }
  };

  /*  Code above controls the Hamburger Menu Button */

  render() {
    const styleContain = {};
    window.onscroll = () => this.checkScroll();

    return (
      <NavStyle
        transform={this.state.toggle}
        //   display={this.state.displayBackdrop}
      >
        {this.state.display ? (
          <div onClick={this.onClickBackdrop} className="backdrop"></div>
        ) : null}
        <div
          style={{ ...styleContain, backgroundColor: this.state.background }}
          className="container"
        >
          <div className="logo">
            <NavLink to="/">
              <img
                src={`/images/logos/${this.state.logo}.png`}
                alt="muna"
                style={{ width: "200px", marginLeft: "20px" }}
              />
            </NavLink>
          </div>
          <div className="nav_items">
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
              Home<span></span>
            </NavLink>
            {this.state.user && (
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
            {this.state.user && (
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderBottom: "4px solid white",
                        color: "white",
                      }
                    : {}
                }
                to={`/profile/${localStorage.getItem("id")}`}
                className="single_item"
              >
                Profile<span></span>
              </NavLink>
            )}
            {/* <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "4px solid white",
                      color: "white",
                    }
                  : {}
              }
              to="/about"
              className="single_item"
            >
              About<span></span>
            </NavLink> */}
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

            {!this.state.user && (
              <a href="/signup" className="discord" onClick={this.logout}>
                <button>Sign In</button>
              </a>
            )}
            {this.state.user && (
              <a href="#" className="discord" onClick={this.logout}>
                <button>Logout</button>
              </a>
            )}
          </div>

          {/*Navigation on Mobile */}

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
              onClick={this.onClickBackdrop}
            >
              Home
            </NavLink>
            {this.state.user && (
              <NavLink
                to="/tournament"
                className="single_item"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "rgb(11, 192, 180)",
                      }
                    : {}
                }
                onClick={this.onClickBackdrop}
              >
                Tournament
              </NavLink>
            )}
            {this.state.user && (
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
            {/* <NavLink to="/about" className="single_item">
              About<span></span>
            </NavLink> */}
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

            {!this.state.user && (
              <a href="/signup" className="discord" onClick={this.logout}>
                <button>Sign In</button>
              </a>
            )}
            {this.state.user && (
              <a href="#" className="discord" onClick={this.logout}>
                <button>Logout</button>
              </a>
            )}
          </div>
        </div>

        <Button
          click={this.onClickButton}
          line1={this.state.line1}
          line2={this.state.line2}
          line3={this.state.line3}
        />
      </NavStyle>
    );
  }
}
export default Navbar;
