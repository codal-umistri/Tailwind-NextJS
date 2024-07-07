"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Feature2 from "../../public/assets/feature-2.svg";
import Check from "../../public/assets/check.svg";
import greenbutton from "../../public/assets/green-button.svg";
import Link from "next/link";

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
        className={`hidden w-1/2 sm:block image-animation ${
          isVisible2 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
        <h3 className="font-medium text-[#00A424] lg:text-[18px] cursor-pointer">
          Customer Support
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Enhance Customer Communication
        </h1>
        <Image
          src={Feature2}
          alt="feature 1 image"
          className="pt-[24px] sm:hidden"
        />
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Improve your customer interactions with our innovative support
          feature. Access real-time insights and provide efficient support with
          our intuitive tools.
        </p>

        <ul className="flex flex-col gap-y-3 lg:text-[18px]">
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Real-time customer support
          </li>
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Comprehensive communication tools
          </li>
          <li className="flex items-center gap-x-2 text-[#36485C]">
            <span>
              <Image src={Check} alt="Checkmark" />
            </span>
            Enhanced customer satisfaction
          </li>
        </ul>

        <Link href="" className="inline-flex items-center gap-x-2 pt-[24px] font-medium  text-[#00A424] lg:text-[18px] cursor-pointer group">
          Learn More
          <span className="transition duration-500 group-hover:translate-x-2">
            <Image src={greenbutton} alt="Learn more" />
          </span>
        </Link>
      </div>
    </div>
  );
}
