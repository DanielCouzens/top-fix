import React from "react";
import { Link } from "gatsby";
import Logo from "../images/Topfix-Logo.png";
import Email from "../images/icons/email.svg";
import Phone from "../images/icons/phone-call.svg";
import Linked from "../images/icons/linked-in-logo-of-two-letters.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <img src={Logo} width="70" height="70" alt="topfix logo" />
        </div>
      </Link>
      <div className="header-contact-nav-wrap">
        <div className="header-contact-details">
          <div className="header-contact email">
            <img
              className="header-email"
              src={Email}
              width="30"
              height="30"
              alt="topfix logo"
            />
            <p>info@topfix-interiors.co.uk</p>
          </div>
          <div className="header-contact telephone">
            <img
              className="header-tel"
              src={Phone}
              width="30"
              height="30"
              alt="topfix logo"
            />
            <p>01179 351 217</p>
          </div>
          <div className="header-contact linked-in">
            <a href="https://www.linkedin.com/company/topfix-interiors-ltd/">
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
