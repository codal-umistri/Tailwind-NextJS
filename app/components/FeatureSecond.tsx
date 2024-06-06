'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Feature2 from "../../public/assets/feature-2.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";

export function FeatureSecond() {
  const [isVisible2, setIsVisible2] = useState(false);
  const divRef2 = useRef(null);

  // Effect for feature 2
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);

          if (divRef2.current) {
            observer.unobserve(divRef2.current);
          }
        }
      },
      { threshold: 1.0 }
    );

    if (divRef2.current) {
      observer.observe(divRef2.current);
    }

    return () => {
      if (divRef2.current) {
        observer.unobserve(divRef2.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col gap-x-6 sm:flex-row relative" ref={divRef2}>
      <Image
        src={Feature2}
        alt="Feature 1 image"
        className={`hidden w-1/2 sm:block transform transition-transform duration-1000 ease-in-out ${
          isVisible2 ? "translate-x-0" : "-translate-x-full"
        }`}
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
        <h3 className="font-medium text-[#00A424] lg:text-[18px] cursor-pointer">
          Customer Support
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Get in touch with your customers
        </h1>
        <Image
          src={Feature2}
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

        <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px] cursor-pointer">
          Learn More
          <span className="transform transition-transform duration-300 hover:scale-110">
            <Image src={bluebutton} alt="Learn more" />
          </span>
        </p>
      </div>
    </div>
  );
}
