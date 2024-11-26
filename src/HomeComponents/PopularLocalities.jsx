import React from "react";
import { Heading1, SubHeading } from "../style component/StyeldComponent";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function PopularLocalities() {
  return (
    <div className="max-w-[1170px] mx-auto py-[45px] px-[22px]">
      <Heading1>Popular localities in and around Delhi NCR</Heading1>
      <div className="py-[20px] grid grid-cols-3 gap-4">
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">Connaught Place</h2>
            <p className="text-[17px] font-extralight">289 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px] " />
        </div>
        {/* 2 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">Sector 29</h2>
            <p className="text-[17px] font-extralight">151 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px]" />
        </div>
        {/* 3 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">Sector 18, Noida</h2>
            <p className="text-[17px] font-extralight">241 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px]" />
        </div>
        {/* 4 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">Rajouri Garden</h2>
            <p className="text-[17px] font-extralight">246 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px]" />
        </div>
        {/* 5 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">Saket</h2>
            <p className="text-[17px] font-extralight">371 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px]" />
        </div>
        {/* 6 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">DLF Cyber City</h2>
            <p className="text-[17px] font-extralight">153 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px]" />
        </div>
        {/* 7 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">Golf Course Road</h2>
            <p className="text-[17px] font-extralight">161 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px]" />
        </div>
        {/* 8 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-between hover:shadow-lg">
          <div>
            <h2 className="text-[21px]">DLF Phase 4</h2>
            <p className="text-[17px] font-extralight">244 places</p>
          </div>
          <MdKeyboardArrowRight className="text-[25px]" />
        </div>
        {/* 9 */}
        <div className="shadow-sm py-[20px] px-[25px] border rounded-xl flex items-center justify-center hover:shadow-lg">
          <h2 className="text-[18px]">See More</h2>
          <MdKeyboardArrowDown className="text-[22px]" />
        </div>
      </div>
    </div>
  );
}
