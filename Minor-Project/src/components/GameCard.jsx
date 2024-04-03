import React from "react";
import PropTypes from "prop-types";
import "./Games.css"; // Import CSS file for styling

const GameCard = ({ imgSrc, title, subtitle, playLink }) => {
  return (
    <div className="box-item">
      <div className="flip-box">
        <div className="flip-box-front text-center" style={{ backgroundImage: `url(${imgSrc})` }}>
          <div className="inner color-white">
            <h3 className="flip-box-header">{title}</h3>
            <p>{subtitle}</p>
            <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img" />
          </div>
        </div>
        <div className="flip-box-back text-center" style={{ backgroundImage: `url(${imgSrc})` }}>
          <div className="inner color-white">
            <h3 className="flip-box-header">{title}</h3>
          
            <a href={playLink} className="flip-box-button">Play</a>
          </div>
        </div>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  playLink: PropTypes.string.isRequired,
};

export default GameCard;
