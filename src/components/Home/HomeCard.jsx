import React from "react";

export const HomeCard = ({ item: { id, cover, name, tags } }) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
        <div className="content flex">
          <div className="detailsrow">
            <h1>{name}</h1>
          </div>
          <div className="cast">
            <h4>
              <span>Tags</span>
              {tags}
            </h4>
          </div>
          <button className="primary-btn">
            <i className="fas fa-play"></i>PLAY NOW
          </button>
        </div>
      </div>
    </>
  );
};
