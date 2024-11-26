import React from "react";
import {
  Heading1,
  MainPera,
  SubHeading,
} from "../style component/StyeldComponent";

export default function FirstCardComponent() {
  return (
    <div className="max-w-[1120px] mx-auto md:flex md:flex-row md:gap-7 gap-3 mt-[35px] flex flex-col mb-[40px] ">
      <div className=" scale-95 w-[100%] hover:scale-[1] ease-in-out">
        <div className="w-[100%]py-[160px]   ">
          <img
            className="rounded-t-2xl w-[100%] h-[160px] object-center object-cover overflow-clip"
            src="../public/images/Fcard1.avif"
            alt=""
          />
        </div>
        <div className="border px-[10px] rounded-b-2xl">
          <SubHeading>Order Online</SubHeading>
          <MainPera>Stay home and order to your doorstep</MainPera>
        </div>
      </div>
      {/* 2 */}
      <div className="scale-95 w-[100%] hover:scale-[1] ease-in-out ">
        <div className="w-[100%]py-[160px]  ">
          <img
            className="rounded-t-2xl w-[100%] h-[160px] object-center object-cover overflow-clip"
            src="../public/images/Fcard2.avif"
            alt=""
          />
        </div>
        <div className="border px-[10px] rounded-b-2xl">
          <SubHeading>Dining</SubHeading>
          <MainPera>View the city's favourite dining venues</MainPera>
        </div>
      </div>
      {/* 3 */}
      <div className="scale-95 w-[100%] hover:scale-[1] ease-in-out">
        <div className="w-[100%]py-[160px]  ">
          <img
            className="rounded-t-2xl w-[100%] h-[160px] object-center object-cover overflow-clip"
            src="../public/images/Fcard3.jpeg"
            alt=""
          />
        </div>
        <div className="border px-[10px] rounded-b-2xl">
          <SubHeading>Live Events</SubHeading>
          <MainPera>Discover India’s best events & concerts</MainPera>
        </div>
      </div>
    </div>
  );
}
