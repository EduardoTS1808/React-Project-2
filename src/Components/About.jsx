import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/img-5.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
        O alimento é uma parte importante de uma dieta equilibrada
        </h1>
        <p className="primary-text">
         Nada melhor do que reunir a família e os amigos para comer um delicioso churrasco em um domingo ensolarado.
        </p>
        <p className="primary-text">
        Sou apaixonado por pessoas que apreciam um bom restaurante todos os finais de semana.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba Mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;