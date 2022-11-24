import { Component, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navbar.styles.scss";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="navbar">
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
            <Link className="nav-link">
              LOGO
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  }
}

export default Navbar;
