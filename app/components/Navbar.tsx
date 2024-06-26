'use client'
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import { useState } from "react";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:conatiner lg:mx-auto lg:px-20">
      <div className="flex items-center relative">
        <Image src={Logo} alt="logo"
        className={`relative transition-transform duration-500 animate-bounce`}/>

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p
              className="text-[#36485C] font-medium transform transition-transform duration-300 hover:scale-110 cursor-pointer hover:text-blue-500 cursor-pointer"
              key={index}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] transform transition-transform duration-300 hover:scale-110 cursor-pointer hover:text-blue-500 cursor-pointer">
          Open an Account
        </p>
        <div className="flex items-center gap-x-2 lg:transform transition-transform duration-300 hover:scale-110 cursor-pointer">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] hover:text-blue-500 cursor-pointer lg:block ">
            Sign In
          </span>
        </div>
        <div>
          <Image src={Menu} alt="Menu Button" className="lg:hidden" />
        </div>
      </div>
    </nav>
  );
}
