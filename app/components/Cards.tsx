"use client";

import React from "react";
import Data from "../sygs/Data";
import ResearchLogo from "../sygs/ResearchLogo";
import { modalData } from "../data/temp";
import useModalStore from "../store/useModalStore";

interface CardHeadProp {
  Logo: React.FC;
  title: string;
}
function CardHead({ Logo, title }: CardHeadProp) {
  return (
    <div className="flex items-center text-gray-700">
      <Logo /> <span className="font-semibold text-lg ml-2">{title}</span>
    </div>
  );
}

function Card1() {
  const { toggle, setIdx } = useModalStore();
  return (
    <div className="bg-white w-full h-112   mt-8 rounded-xl shadow-md px-7 py-6 flex flex-col">
      <CardHead Logo={Data} title="Available Datasets" />
      <div className=" w-full h-full py-2 mt-1">
        {modalData.map((e, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg h-26 mt-3 p-3 hover:border-customPurple shadow-xs hover:-translate-y-1 ease-in-out duration-300 cursor-pointer"
            onClick={() => {
              toggle();
              setIdx(idx);
            }}
          >
            <div className=" font-semibold">{e.title}</div>
            <div className="text-xs text-gray-500 mt-1">
              <span>
                📊 {e.Samples}
                {(e.Type == "Protein Analysis" && "samples") ||
                  (e.Type == "Chemical Compounds" && "compounds") ||
                  (e.Type == "Clinical Data" && " participants")}
              </span>
              <span className="ml-1">👤 {e.Owner}</span>
            </div>
            <div className="text-[11px] font-semibold flex mt-1">
              {e.Verified && (
                <div className="badge-verified rounded-full px-2 py-1 mr-2">
                  ✓ Verified
                </div>
              )}
              {e.ZKProtected && (
                <div className="badge-locked rounded-full px-2 py-1">
                  🔒 ZK Protected
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white w-full   md:h-112 h-auto  mt-8 rounded-xl shadow-md px-7 py-6 flex flex-col">
      <CardHead Logo={ResearchLogo} title="Researchers" />

      <div className="mt-7 justify-between flex w-[98%]">
        <div className="flex ml-2 ">
          <div className="rounded-full w-10 h-10 font-bold flex justify-center items-center text-white avatar">
            AK
          </div>
          <div className="flex-col items-center text-sm ml-2">
            <span className="font-semibold">Dr. K. Anil Kumar</span>
            <br></br>
            <span className="text-gray-500 text-xs flex items-center">
              Industrial Research{" "}
              <p className="rounded-full w-[3px] h-[3px] bg-gray-500 ml-1 mr-1"></p>{" "}
              30 + years
            </span>
          </div>
        </div>
        <button className="font-semibold text-white bg-[#48bb78] w-31 h-7 text-[13px] rounded-md">
          Access Granted
        </button>
      </div>

      <div className="mt-8 justify-between flex w-[98%]">
        <div className="flex ml-2 ">
          <div className="rounded-full w-10 h-10 font-bold flex justify-center items-center text-white avatar">
            GG
          </div>
          <div className="flex-col items-center text-sm ml-2">
            <span className="font-semibold">Dr. G. GopiKrishna</span>
            <br></br>
            <span className="text-gray-500 text-xs flex items-center">
              Organic Chemistry{" "}
              <p className="rounded-full w-[3px] h-[3px] bg-gray-500 ml-1 mr-1"></p>{" "}
              23 + years
            </span>
          </div>
        </div>
        <button
          className="font-semibold text-white w-30 h-7 text-[13px] rounded-md"
          id="btn"
        >
          Request Access
        </button>
      </div>

      <div className=" grid grid-cols-3 gap-2 h-18 mt-6 w-full">
        <div className="stat-box rounded-xl flex flex-col justify-center items-center ">
          <div className="font-bold text-lg" id="temp">
            3
          </div>
          <div className="text-gray-500 text-xs">DATASETS</div>
        </div>

        <div className="stat-box rounded-xl flex flex-col justify-center items-center ">
          <div className="font-bold text-lg" id="temp">
            2
          </div>
          <div className="text-gray-500 text-xs">RESEARCHERS</div>
        </div>
        <div className="stat-box rounded-xl flex flex-col justify-center items-center ">
          <div className="font-bold text-lg" id="temp">
            100%
          </div>
          <div className="text-gray-500 text-[9px]">PRIVATE</div>
        </div>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <div className="w-full flex md:flex-row flex-col justify-between md:gap-5 gap-1">
      <Card1 />

      <Card2 />
    </div>
  );
}
