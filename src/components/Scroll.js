import React, { useState, useEffect } from "react";
import chev from "../images/icons/right-chevron.svg";
import { Link } from "gatsby";

const Scroller = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      onClick={scrollTop}
      className="scroll"
      to="#header"
      title="Scroll to top"
      style={{ opacity: showScroll ? "1" : "0" }}>
      <img src={chev} alt="up arrow to scroll page" />
      <span>Scroll To Top</span>
    </Link>
  );
};

export default Scroller;
