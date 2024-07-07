"use client";

import Image from "next/image";
import BlueArrow from "../../public/assets/blue-button.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";
import Phone from "../../public/assets/Mobile.png";
import Overview from "../../public/assets/Web.png";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export function Hero() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const words = "Start monitoring your website like a pro";
  const typingSpeed = 100;
  const imageContainerRef = useRef(null);
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < words.length) {
        setText((prevText) => prevText + words[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const checkVisibility = () => {
    const imageContainer = imageContainerRef.current;
    const logosContainer = logosContainerRef.current;
  
    if (logosContainer) {
      const rect = logosContainer.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        setIsLogoVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div className="lg:pt-10 relative">
      <div className="image absolute left-0 right-0 top-[30%] bottom-0 z-10"></div>
      <div className="container mx-auto px-5 relative z-20">
        <div className="max-w-[846px] mx-auto">
          <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px] md:text-[48px] md:leading-[56px]">
            {text}
          </h1>
          <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
            Get a birds eye view with our customizable dashboard. Stay on top of
            things! Revamp your work process with our game-changing feature.
            Boost productivity and efficiency!
          </p>
          <div className="flex w-full pt-8 justify-center gap-x-6 ">
            <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
              Try for free
            </button>
            <Link
              href=""
              className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit cursor-pointer group"
            >
              View Pricing
              <span className="transition duration-500 group-hover:translate-x-2">
                <Image src={BlueArrow} alt="Learn more" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative flex h-full justify-center mb-32">

          <div className="flex items-end">
            <Image
              src={Overview}
              alt="hero image"
              className={`max-w-[66vw] mt-2 md:max-w-[62vw] xl:max-w-[70vw] transition duration-1000 delay-200 ease-in ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
              priority
            />
            <Image
              src={Phone}
              alt="phone image"
              className={`-ml-[4vw] mt-2 mb-[-2vw] md:-mb-14 max-w-[17vw] md:max-w-[18vw] lg:max-w-[18vw] xl:md:max-w-[20vw] relative transition duration-2000 delay-150 ease-in-out  ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
              height={485}
              width={271}
              quality={100}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center pb-4 lg:container lg:flex-row lg:justify-between lg:px-20 b-16" ref={logosContainerRef}>
          <p className={`text-[#FFFFFF] text-center lg:text-[18px] ${isLogoVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}>
            Trusted by these companies
          </p>
          <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
            <Image
              src={Google}
              alt=""
              priority
              className={`transition duration-700 ease-in-out ${
                isLogoVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
            <Image
              src={Slack}
              alt=""
              priority
              className={`transition duration-700 ease-in-out delay-400 ${
                isLogoVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
            <Image
              src={Truspilot}
              alt=""
              priority
              className={`transition duration-700 ease-in-out delay-500 ${
                isLogoVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
            <Image
              src={Cnn}
              alt=""
              priority
              className={`transition duration-700 ease-in-out delay-600 ${
                isLogoVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
            <Image
              src={Cluth}
              alt=""
              priority
              className={`transition duration-700 ease-in-out delay-500 ${
                isLogoVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
