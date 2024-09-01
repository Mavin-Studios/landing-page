"use client";

import Image from "next/image";
import IllustrationImage from "@/../public/Saly-27.png";

export default function Hero() {
  return (
    <section className=" px-4 xl:px-0 xl:flex flex-col xl:flex-row container mx-auto drop-shadow-sm xl:text-gray-800 mt-24 py-24">
      <div className="z-10 flex flex-col justify-center">
        <h2 className="font-bold text-6xl max-w-4xl font-display">
          Digital and Creative Agency based in Jakarta
        </h2>
        <p className="text-lg mt-10 max-w-4xl font-medium">
          We're a forward-thinking digital and creative agency that crafts
          innovative solutions to help ambitious brands thrive in the
          ever-evolving digital landscape. Our team of experts combines creative
          vision with technical expertise to deliver bespoke experiences that
          captivate, engage, and convert.
        </p>
        <div>
          <button className="btn-primary mt-10">Contact Us</button>
          <button className="btn-secondary mt-10 ml-8">Our Services</button>
        </div>
      </div>
      <Image
        src={IllustrationImage}
        alt="Designer Tools"
        draggable={false}
        className="w-1/2"
      />
    </section>
  );
}
