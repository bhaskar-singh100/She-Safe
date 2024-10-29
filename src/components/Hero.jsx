import React from "react";
import laptop from "../assets/laptop1.png";
import video from "../assets/video.mp4";
const Hero = () => {
  return (
    <>
      <div className="hero-image w-[98.8vw] ">
        <div className="hero">
          <h1>Your Safety,</h1>
          <h2>Our Priority</h2>
          <p>
            "A community-driven solution to ensure every woman feels safe, no
            matter where she is"
          </p>
        </div>
        <div className="laptop-image">
          <img src={laptop} alt="" className="laptop-image-video" />
          <video src={video} controls autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
};

export default Hero;
