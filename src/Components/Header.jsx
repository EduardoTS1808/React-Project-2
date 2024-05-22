import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/img-6.png";
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground}  />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Sua comida favorita entregue quente e fresca
          </h1>
          <p className="primary-text">
          Chefs saudáveis ​​fazem todo o trabalho de preparação, como fazer suchi, picar e marinar, para que você possa cozinhar alimentos frescos.  
          </p>
          <button className="secondary-button">
            Peça Agora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;