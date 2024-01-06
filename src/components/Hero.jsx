import React from "react";
import HeroImage from "/public/assets/Hero Image.png";
const Hero = () => {
  return (
    <section className="p-7 md:p-12">
      <div>
        <img src={HeroImage} alt="" className="w-4/4 md:w-3/5 m-auto" />
      </div>
      <div className="mt-3">
        <h1 className="font-semibold md:text-4xl text-3xl">
          Online Experiences
        </h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
