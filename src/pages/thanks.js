import React from "react";
import Layout from "../components/Layout";

const Thanks = () => {
  return (
    <Layout>
      <div className="thanks-wrap">
        <iframe
          title="topfix"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19887.101136202415!2d-2.585676027062345!3d51.46021932187252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871f6d3ce2d293f%3A0x7ec9f06531201b88!2sTopfix%20Interiors%20Ltd!5e0!3m2!1sen!2suk!4v1622211935162!5m2!1sen!2suk"
          width="800"
          height="600"
          allowFullScreen=""
          loading="lazy"></iframe>
        <div className="thanks-message">
          <h1>Thanks for contacting us</h1>
          <h2>We will be back in touch soon!</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Thanks;
