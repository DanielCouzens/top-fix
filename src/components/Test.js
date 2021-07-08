import React from "react";

const Test = () => {
  return (
    <div class="row" data-equalizer="contents">
      <div class="columns medium-4 text-center" data-equalizer-watch="contents">
        <img src="http://placehold.it/400x400&text=[col1]" />
      </div>
      <div
        class="columns medium-4 myBg"
        text-center
        data-equalizer-watch="contents">
        <div class="myKenburns">
          <div class="mySlick">
            <div>
              <img
                src="https://kenwheeler.github.io/slick/img/fonz1.png"
                alt="slide 1"
              />
            </div>
            <div>
              <img
                src="https://kenwheeler.github.io/slick/img/fonz2.png"
                alt="slide 2"
              />
            </div>
            <div>
              <img
                src="https://kenwheeler.github.io/slick/img/fonz3.png"
                alt="slide 3"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="columns medium-4 text-center" data-equalizer-watch="contents">
        <img src="http://placehold.it/400x400&text=[col3]" />
      </div>
    </div>
  );
};

export default Test;
