import React, { useState } from "react";
import "./CSS/info.css";

const Info = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const toggle = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div>
      {toggleBtn ? (
        <div className="info" id="#info">
          <div className="container">
            <div className="title">
              <h1>Task Tracker</h1>
            </div>
            <div className="description">
              <p>
                Something very important I want to say about this app and its
                technologies. Perhaps, my life story? :)
              </p>
              &#x2024;
              <p> Just Kidding, have fun!🌞</p>
              <button className="goto" onClick={() => toggle()}>
                <p>Go To App</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      ;
    </div>
  );
};

export default Info;
