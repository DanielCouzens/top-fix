import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Form from "../components/Form";
import Email from "../images/icons/email.svg";
import Phone from "../images/icons/phone-call.svg";
import Linked from "../images/icons/linkedin.svg";
import Logo from "../images/Topfix-Logo.png";

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <div className="contact-page-wrap">
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4971.775648135884!2d-2.572538566349905!3d51.4602159796274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f6d3ce2d293f%3A0x7ec9f06531201b88!2sTopfix%20Interiors%20Ltd!5e0!3m2!1sen!2suk!4v1642440636108!5m2!1sen!2suk"
            width="800"
            height="600"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"></iframe>
          {/* <iframe
            title="topfix"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19887.101136202415!2d-2.585676027062345!3d51.46021932187252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f6d3ce2d293f%3A0x7ec9f06531201b88!2sTopfix%20Interiors%20Ltd!5e0!3m2!1sen!2suk!4v1622211935162!5m2!1sen!2suk"
            width="800"
            height="600"
            allowFullScreen=""
            loading="lazy"></iframe> */}
          <div className="contact-details">
            <h1>Contact Us</h1>

            <div className="contact-address">
              <h2>Topfix Interiors</h2>
              <p>Unit 10</p>
              <p>Circuit 32</p>
              <p>Easton Rd</p>
              <p>BS5 0DB</p>
              <div className="contact-logo">
                <img src={Logo} width="50" height="50" alt="topfix logo" />
              </div>
            </div>
            <div className="contact-links-wrap">
              <div className="contact-tel">
                <img src={Phone} width="30" height="30" alt="topfix logo" />
                <a href="tel:01179 351 217">01179 351 217</a>
              </div>
              <div className="contact-email">
                <img src={Email} width="30" height="30" alt="topfix logo" />
                <a href="mailto:info@topfix-interiors.co.uk">
                  info@topfix-interiors.co.uk
                </a>
              </div>
              <a
                href="https://www.linkedin.com/company/topfix-interiors-ltd/"
                target="_blank"
                rel="noreferrer"
                className="contact-linked-in">
                <img src={Linked} width="30" height="30" alt="topfix logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-text">
          <p>
            Fill out the form below and we will contact you within 24 hours.
          </p>
        </div>
        <Form />
      </div>
    </Layout>
  );
};

export default contact;
