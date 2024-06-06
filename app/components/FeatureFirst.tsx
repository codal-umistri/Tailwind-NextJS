"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Feature1 from "../../public/assets/feature-1.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";

export function FeatureFirst() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef1 = useRef(null);

  // Effect for feature 1
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (divRef1.current) {
            observer.unobserve(divRef1.current);
          }
        }
      },
      { threshold: 1.0 }
    );

    if (divRef1.current) {
      observer.observe(divRef1.current);
    }

    return () => {
      if (divRef1.current) {
        observer.unobserve(divRef1.current);
      }
    };
  }, []);
  return (
    <div
      className="flex flex-col gap-x-6 sm:flex-row-reverse relative"
      ref={divRef1}
    >
      <Image
        src={Feature1}
        alt="Feature 1 image"
        className={`hidden w-1/2 sm:block transform transition-transform duration-1000 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
        <h3 className="font-medium text-[#0085FF] lg:text-[18px] cursor-pointer">
          Sales Monitoring
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Simplify your sales monitoring
        </h1>
        <Image
          src={Feature1}
          alt="feature 1 image"
          className="pt-[24px] sm:hidden"
        />
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Stay on top of things and revamp your work process with our
          game-changing feature. Get a bird’s eye view with our customizable
          dashboard.
        </p>

        <ul className="flex flex-col gap-y-3 lg:text-[18px]">
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Lorem ipsum dolor sit amet
          </li>
        </ul>

        <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px] cursor-pointer">
          Learn More
          <span className="transform transition-transform duration-300 hover:scale-110">
            <Image src={bluebutton} alt="Learn more" />
          </span>
        </p>
      </div>
    </div>
  );
}
