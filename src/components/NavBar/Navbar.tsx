import React from "react";
import { NavLink } from "react-router-dom";

import { NavStyle } from "./style";
import Button from "./Button";
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
};

class Navbar extends React.Component<IProps, IState> {
  state = {
    scrollPosition: 0,
    display: false,
    background: "",
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
      });
    } else {
      this.setState({
        background: "transparent",
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
                src={`/images/logos/logo-main.png`}
                alt="muna"
                style={{ width: "200px" }}
              />
            </NavLink>
          </div>
          <div className="nav_items">
            <NavLink to="/" className="single_item">
              Home<span></span>
            </NavLink>

            <NavLink to="/tournament" className="single_item">
              Tournament<span></span>
            </NavLink>

            <NavLink
              to={`/profile/${localStorage.getItem("id")}`}
              className="single_item"
            >
              Profile<span></span>
            </NavLink>

            <NavLink to="/contact-us" className="single_item">
              Contact Us<span></span>
            </NavLink>

            {!this.state.user && (
              <NavLink to="/signup" className="single_item">
                Signup<span></span>
              </NavLink>
            )}

            <a
              href="https://t.me/+4ICOg08hzMQwZTdk"
              target="_blank"
              rel="noopener noreferrer"
              className="discord"
            >
              <button>Join our discord</button>
            </a>
          </div>

          {/*Navigation on Mobile */}

          <div className="nav_items_mobile">
            <NavLink
              to="/"
              className="single_item"
              onClick={this.onClickBackdrop}
            >
              Home
            </NavLink>

            <NavLink
              to="/tournament"
              className="single_item"
              onClick={this.onClickBackdrop}
            >
              Tournament
            </NavLink>

            <NavLink
              to={`/profile/${localStorage.getItem("id")}`}
              className="single_item"
            >
              Profile<span></span>
            </NavLink>

            <NavLink to="/contact-us" className="single_item">
              Contact Us<span></span>
            </NavLink>

            {!this.state.user && (
              <NavLink to="/signup" className="single_item">
                Signup<span></span>
              </NavLink>
            )}

            <a
              href="https://t.me/+4ICOg08hzMQwZTdk"
              target="_blank"
              rel="noopener noreferrer"
              className="discord"
            >
              <button>Join our discord</button>
            </a>
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
