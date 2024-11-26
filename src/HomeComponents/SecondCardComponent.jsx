import React from "react";
import {
  Heading1,
  MainPera,
  SubHeading,
} from "../style component/StyeldComponent";
import { IoMdArrowDropright } from "react-icons/io";

export default function SecondCardComponent() {
  return (
    <div className="max-w-[1170px] mx-auto px-[25px]">
      <Heading1>Collections</Heading1>
      <div className="w-[100%] flex items-center justify-between">
        <MainPera>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends
        </MainPera>
        <span className="relative">
          <p className="text-red-500 font-Roboto font-light">
            All collections in Delhi NCR{" "}
          </p>
          <IoMdArrowDropright className="absolute top-[0px] right-[-25px] text-[25px] text-red-500 " />
        </span>
      </div>
      <div className="flex justify-between items-center gap-2 mt-5 mb-[30px]">
        <div className="basis-1/4 relative">
          <img src="../public/images/SecondCard1.avif" alt="" />
          <div className="text-white absolute bottom-1 left-5 ">
            <h3 className=" text-[18px]">Top Trending Spots</h3>
            <h5 className="flex items-center">
              27 Places <IoMdArrowDropright className="text-[28px]" />
            </h5>
          </div>
        </div>
        {/* 2nd */}
        <div className="basis-1/4 relative">
          <img src="../public/images/SecondCard2.avif" alt="" />
          <div className="text-white absolute bottom-1 left-5 ">
            <h3 className="text-[18px]">Best Insta-worthy Places</h3>
            <h5 className="flex items-center">
              47 Places <IoMdArrowDropright className="text-[28px]" />
            </h5>
          </div>
        </div>
        {/* /3rd */}
        <div className="basis-1/4 relative">
          <img src="../public/images/SecondCard3.avif" alt="" />
          <div className="text-white absolute bottom-1 left-5 ">
            <h3 className="text-[18px]">Best Rooftop Places</h3>
            <h5 className="flex items-center">
              50 Places <IoMdArrowDropright className="text-[28px]" />
            </h5>
          </div>
        </div>
        {/* 4th */}
        <div className="basis-1/4 relative">
          <img src="../public/images/SecondCard4.avif" alt="" />
          <div className="text-white absolute bottom-1 left-5 ">
            <h3 className=" text-[18px]">Newly Opened Places</h3>
            <h5 className="flex items-center">
              38 Places <IoMdArrowDropright className="text-[28px]" />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
