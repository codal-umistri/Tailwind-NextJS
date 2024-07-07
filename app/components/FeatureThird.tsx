'use client'
import { useEffect, useRef, useState } from "react";
import pinkButton from "../../public/assets/pink-button.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Image from "next/image";
import Link from "next/link";

export function FeatureThird() {
  const [isVisible3, setIsVisible3] = useState(false);
  const divRef3 = useRef(null);

  // Effect for feature 3
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible3(true);

          if (divRef3.current) {
            observer.unobserve(divRef3.current);
          }
        }
      },
      { threshold: 1.0 }
    );

    if (divRef3.current) {
      observer.observe(divRef3.current);
    }

    return () => {
      if (divRef3.current) {
        observer.unobserve(divRef3.current);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-x-6 sm:flex-row-reverse relative"
      ref={divRef3}
    >
      <Image
        src={Feature3}
        alt="Feature 1 image"
        className={`hidden w-1/2 sm:block image-animation ${
          isVisible3 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
        <h3 className="font-medium text-[#EB2891] lg:text-[18px] cursor-pointer">
          Growth Monitoring
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Monitor your site’s new subscribers
        </h1>
        <Image
          src={Feature3}
          alt="feature 1 image"
          className="pt-[24px] sm:hidden"
        />
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Stay on top of things and revamp your work process with our
          game-changing feature. Get a bird’s eye view with our customizable
          dashboard.
        </p>

        <div className="flex w-full gap-x-[24px] ">
          <div className="w-1/2 flex flex-col gap-y-3">
            <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
            <p className="text-[#36485C] ">Lorem ipsum dolor sit</p>
          </div>
          <div className="w-1/2 flex flex-col gap-y-3">
            <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
            <p className="text-[#36485C]">Conse adipiscing elit</p>
          </div>
        </div>

        <Link href="" className="inline-flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px] cursor-pointer group">
          Learn More
          <span className="transition duration-500 group-hover:translate-x-2">
            <Image src={pinkButton} alt="Learn more" />
          </span>
        </Link>
      </div>
    </div>
  );
}
