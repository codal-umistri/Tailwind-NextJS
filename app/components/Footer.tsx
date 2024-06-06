import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

export function Footer() {
  return (
    // <div classNameName="pt-[80px] pb-[40px]">
    //   <div classNameName="flex items-center justify-center gap-x-[12px]">
    //     <Image src={Logo} alt="Logo" />
    //     <p classNameName="font-bold text-[#36485C] text-[17px]">Umang Mistry</p>
    //   </div>

    //   <ul classNameName="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
    //     <li>Features</li>
    //     <li>Pricing</li>
    //     <li>Enterprise</li>
    //     <li>Careers</li>
    //   </ul>

    //   <p classNameName="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
    //     © Copyright 2024. Your Site. All rights reserved.
    //   </p>

    //   <div classNameName="flex item-center justify-center gap-x-[56px] pt-[40px]">
    //     <Image src={Facebook} alt="Facebook" />
    //     <Image src={Feed} alt="Feed" />
    //     <Image src={Twitter} alt="Twitter" />
    //   </div>
    // </div>

    <div className="bg-gray-900 mt-[16px] w-full">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> Download our fitness app </h3>
          <p> Stay fit. All day, every day. </p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 transform transition-transform duration-300 hover:scale-105">
            <Image
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                alt="Google Play Store"
                width={28}
                height={28}
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2 transform transition-transform duration-300 hover:scale-105">
            <Image
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                alt="Apple Store"
                width={28}
                height={28}
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; Beautiful Footer, 2021.{" "}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
