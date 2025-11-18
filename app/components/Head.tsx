"use client";
import Query from "../sygs/Query";
import useModalStore from "../store/useModalStore";

export default function Head() {
  const { setFAQ } = useModalStore();

  return (
    <div className="bg-white w-full md:p-8 p-6 rounded-xl md:h-24 h-auto flex-col flex justify-center  shadow-md ">
      <div className="md:flex-row flex-col flex justify-between md:items-center">
        <div>
          <div>
            <span className="text-2xl">🧬</span>
            <span className="text-2xl font-bold ml-2">ZkBio</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Collaborate on research. Keep your data yours.
          </div>
        </div>

        <div className="md:w-40 w-full mt-2">
          <button
            className="md:w-40 w-full text-sm py-2 h-10 cursor-pointer bg-customPurple  hover:bg-[#5a67d8]  font-bold text-white rounded-lg flex justify-center hover:-translate-y-px duration-300 ease-in-out shadow-gray-300 hover:shadow-lg"
            
            onClick={(e) => {
              setFAQ();
            }}
          >
            {" "}
            <Query /> <span className="ml-2">How It Works</span>
          </button>
        </div>
      </div>
    </div>
  );
}
