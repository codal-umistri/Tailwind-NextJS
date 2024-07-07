"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Feature1 from "../../public/assets/feature-1.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import Link from "next/link";

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
    console.log("observe")

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
        className={`hidden w-1/2 sm:block image-animation ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
        <h3 className="font-medium text-[#0085FF] lg:text-[18px] cursor-pointer">
          Sales Monitoring
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Streamline Your Sales Monitoring
        </h1>
        <Image
          src={Feature1}
          alt="feature 1 image"
          className="pt-[24px] sm:hidden"
        />
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Enhance your workflow with our innovative sales monitoring feature.
          Gain comprehensive insights with our customizable dashboard.
        </p>

        <ul className="flex flex-col gap-y-3 lg:text-[18px]">
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Comprehensive sales tracking
          </li>
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Customizable reporting
          </li>
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Real-time data analysis
          </li>
        </ul>

        <Link href="" className="inline-flex items-center gap-x-2 pt-[24px] font-medium  text-[#0085FF] lg:text-[18px] cursor-pointer group">
          Learn More
          <span className="transition duration-500 group-hover:translate-x-2">
            <Image src={bluebutton} alt="Learn more" />
          </span>
        </Link>
      </div>
    </div>
  );
}
