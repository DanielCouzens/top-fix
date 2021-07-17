import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../images/Topfix-Logo.png";
import Email from "../images/icons/email.svg";
import Phone from "../images/icons/phone-call.svg";
import Linked from "../images/icons/linkedin.svg";
// import NavButton from "../components/NavButton";

const Header = () => {
  const [navState, setNavState] = useState(false);
  const navStyles = navState ? "opened" : "";
  const navWrapStyles = navState ? "nav-show" : "nav-hide";
  return (
    <div className="header">
      <button
        className={`menu ${navStyles}`}
        onClick={() => setNavState(!navState)}
        aria-label="Main Menu">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>

      <Link to="/">
        <div className="header-logo">
          <img src={Logo} width="70" height="70" alt="topfix logo" />
        </div>
      </Link>
      <div className={`header-contact-nav-wrap ${navWrapStyles}`}>
        <div className="header-contact-details">
          <div className="header-contact email">
            <img
              className="header-email"
              src={Email}
              width="30"
              height="30"
              alt="topfix logo"
            />
            <a href="mailto:info@topfix-interiors.co.uk">
              info@topfix-interiors.co.uk
            </a>
          </div>
          <div className="header-contact telephone">
            <img
              className="header-tel"
              src={Phone}
              width="30"
              height="30"
              alt="topfix logo"
            />
            <a href="tel:01179 351 217">01179 351 217</a>
          </div>
          <div className="header-contact linked-in">
            <a
              href="https://www.linkedin.com/company/topfix-interiors-ltd/"
              target="_blank">
              <img
                className="header-linked"
                src={Linked}
                width="30"
                height="30"
                alt="topfix logo"
              />
            </a>
          </div>
        </div>
        <div className="header-nav">
          <ul>
            <Link
              activeStyle={{
                color: "#c53c46",
              }}
              to="/">
              Home
            </Link>
            <Link
              activeStyle={{
                color: "#c53c46",
              }}
              to="/case-studies">
              Case Studies
            </Link>
            <Link
              activeStyle={{
                color: "#c53c46",
              }}
              to="/services">
              Services
            </Link>
            <Link
              activeStyle={{
                color: "#c53c46",
              }}
              to="/environmental">
              Environmental
            </Link>
            <Link
              activeStyle={{
                color: "#c53c46",
              }}
              to="/quality-and-compliance">
              Quality &amp; Compliance
            </Link>
            <Link
              activeStyle={{
                color: "#c53c46",
              }}
              to="/health-and-safety">
              Health &amp; Safety
            </Link>
            <Link
              activeStyle={{
                color: "#c53c46",
              }}
              to="/contact">
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
