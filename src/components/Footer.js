import React from "react";
import { Link } from "gatsby";
import Logo from "../images/Topfix-Logo.png";
import Email from "../images/icons/email.svg";
import Phone from "../images/icons/phone-call.svg";
import Linked from "../images/icons/linked-in-logo-of-two-letters.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} width="70" height="70" alt="topfix logo" />
      </div>

      <div className="footer-elements-wrap">
        <div className="footer-elements">
          <h2>Menu</h2>

          <ul className="footer-nav">
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
        <div className="footer-elements">
          <h2>Address</h2>
          <h3>Topfix Interiors</h3>
          <p>Unit 10</p>
          <p>Circuit 32</p>
          <p>Easton Rd</p>
          <p>BS5 0DB</p>
        </div>
        <div className="footer-elements">
          <h2>Contact</h2>
          <div className="footer-contact-details">
            <div className="footer-contact footer-email">
              <img
                className="footer-email"
                src={Email}
                width="30"
                height="30"
                alt="topfix logo"
              />
              <p>info@topfix-interiors.co.uk</p>
            </div>
            <div className="footer-contact footer-telephone">
              <img
                className="footer-tel"
                src={Phone}
                width="30"
                height="30"
                alt="topfix logo"
              />
              <p>01179 351 217</p>
            </div>
            <div className="footer-contact footer-linked-in">
              <a href="https://www.linkedin.com/company/topfix-interiors-ltd/">
                <img
                  className="footer-linked"
                  src={Linked}
                  width="30"
                  height="30"
                  alt="topfix logo"
                />
              </a>
            </div>
            <div className="footer-logo-two">
              <img src={Logo} width="50" height="50" alt="topfix logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <a className="web-design" href="https://www.netfrontier.co.uk/">
          Web Design by <span>Net Frontier</span>
        </a>
        <Link to="/">Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
