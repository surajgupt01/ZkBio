"use client";
import useModalStore from "../store/useModalStore";
import { modalData } from "../data/temp";
import { WData } from "../data/WorkData";

type RType = {
  index: number;
  toggle: () => void;
};
function ResearchDivs({ index, toggle }: RType) {
  return (
    <div
      className="w-124 h-155 rounded-l-lg bg-white p-7 overflow-auto"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
    >
      <div className="text-xl font-semibold">{modalData[index].title}</div>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Owner</span>
          <span className="font-semibold text-black">
            {modalData[index].Owner}
          </span>
        </div>
        <div className="flex justify-between mt-3 text-md text-gray-400">
          <span>Type</span>
          <span className="font-semibold text-black">
            {modalData[index].Type}
          </span>
        </div>
        <div className="flex justify-between mt-3 text-sm text-gray-500">
          <span>Samples</span>
          <span className="font-semibold text-black">
            {modalData[index].Samples}
          </span>
        </div>
      </div>
      <div className="w-full p-[15px] mt-4 stat-box rounded-md text-xs border-l-customPurple border-l-4 wrap-break-word">
        <div className="text-gray-500 font-semibold">
          {modalData[index].key.title}
        </div>
        <div className="text-[13px] mt-2 text-gray-800 key-font">
          {modalData[index].key.val}
        </div>
      </div>
      <div className="mt-4">
        <div className="font-semibold">{modalData[index].VA.title}</div>
        <div className="text-[13px] text-gray-500">
          {modalData[index].VA.val.map((e: string, index) => (
            <div key={index} className="m-5">
              {e}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full p-[15px]   border-l-4 wrap-break-word element">
        <div className=" font-semibold">{modalData[index].PG.title}</div>
        <div className="text-[13px] mt-2 font-normal">
          {modalData[index].PG.val}
        </div>
      </div>

      <button
        className="w-full rounded-md font-semibold text-sm p-2 bg-gray-200 mt-4 hover:bg-gray-300 cursor-pointer"
        onClick={toggle}
      >
        Close
      </button>
    </div>
  );
}

type FType = {
  setFAQ: () => void;
};

function FAQDIV({ setFAQ }: FType) {
  return (
    <div
      className="md:w-124 w-auto h-155 rounded-l-lg bg-white p-7 overflow-auto"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
    >
      <div className="text-xl font-semibold">{WData[0].title}</div>
      <div className="mt-5 leading-6 text-gray-500 text-sm">
        {WData[0].desc}
      </div>
      <div className="mt-2">
        {WData[0].pts.map((e, index) => (
          <div  key={index} className="flex items-start mt-4">
            <div
             
              className="w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold text-xl avatar shrink-0"
            >
              {index + 1}
            </div>

            <div className="text-md ml-4">
              <div className="font-semibold">{e.title}</div>

              <div className="text-sm text-gray-500 leading-6 mt-1">
                {e.val}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-green-50 mt-8 rounded-xl border-l-4 border-green-400 p-[15px]">
        <div className="text-[13px] font-semibold text-green-900">
          ✨ Powered By
        </div>
        <div className="text-customPurple">
          <div className="tech-badge">Cardano Blockchain</div>
          <div className="tech-badge wrap-break-word">MidnightZK</div>
          <div className="tech-badge">Zero-Knowledge Proofs</div>
        </div>
      </div>
      <button
        className="w-full rounded-md font-semibold text-sm p-2 bg-gray-200 mt-4 hover:bg-gray-300 cursor-pointer"
        onClick={() => setFAQ()}
      >
        Close
      </button>
    </div>
  );
}

export default function Modal() {
  const { isOn, toggle, FAQ, setFAQ, index } = useModalStore();

  return (
    <div
      className="absolute w-full h-full bg-black/50 flex justify-center items-center-safe z-100 p-5"
      onClick={() => {
        if (isOn) toggle(); // only research modal closes on click
        else if (FAQ) setFAQ(); // FAQ closes only on second click
      }}
    >
      {isOn && <ResearchDivs index={index} toggle={toggle} />}
      {FAQ && <FAQDIV setFAQ={setFAQ} />}
    </div>
  );
}
