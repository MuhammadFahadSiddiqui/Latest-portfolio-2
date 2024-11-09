"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../../public/Profile Pic-01.svg";
import Image from 'next/image';
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content mx-auto">
            <h1 className="title-font ">
              Hi! <span className="highlight">I'm,</span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Muhammad Fahad Siddiqui"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="hero-text">
              I'm a Frontend developer, also a Student at Governor Initiative
              for Cloud Applied Generative AI.
            </p>
          </div>
          <div className="profile-img">
            <Image
              alt="Fahad"
              width={300}
              height={300}
              loading="lazy"
              src={ProfilePic}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
