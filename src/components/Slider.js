import React, { useState, useEffect } from "react";
import "../styles/components-styles/slider.scss";
import SliderContent from "../components/SliderContent";

const Slider = (props) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const size = count;
  const translate = `translateX(${size}%)`;

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setCount(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCount((count) => count + 10);
      }, 200);
    } else if (!isActive && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, count]);

  console.log(props);

  return (
    <div className="slider">
      <SliderContent height={"50%"} translate={translate}></SliderContent>

      <div className="buttons-wrap">
        <p>{count}</p>
        <button onClick={toggle}>Activate</button>
        <button onClick={() => setCount(count + 10)}>Add</button>
        <button onClick={() => setCount(count - 10)}>Minus</button>
        <button onClick={reset}>Clear</button>
        <button onClick={() => setCount(count + 100)}>+ 100</button>
        <button onClick={() => setCount(count - 100)}>- 100</button>
      </div>
    </div>
  );
};

export default Slider;
