import React from "react";
import "./App.css";

export const PCard = ({ item: { id, name, tags, coverr } }) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={coverr} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{tags}</span>
          <br />
          <button className="primary-btn">
            <i className="fa fa-play"></i>PLAY NOW
          </button>
        </div>
      </div>
    </>
  );
};
