"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../../public/Profile Pic-01.svg";
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-gray-900 h-full w-full">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
              Hi! <span className="text-cyan-400 font-medium">I'm,</span>
              <br className="hidden lg:inline-block text-cyan" />
              <Typewriter
                options={{
                  strings: ["Muhammad Fahad Siddiqui"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              I'm a Frontend developer, also a Student at Governor Initiative
              for Cloud Applied Generative AI.
            </p>
          </div>
          <div className="lg:w-1/2 w-5/6 flex justify-center">
            <Image
              className="object-cover object-center rounded"
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
