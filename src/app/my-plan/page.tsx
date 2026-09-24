import React from "react";

const MyPlan = () => {
  return (
    <div className="my-7 px-4 md:px-8 lg:px-16 xl:px-24">
      <h2 className="font-heading uppercase font-bold font text-xl md:text-2xl lg:text-3xl mb-2">
        my plan
      </h2>
      <p className="text-[#8A92A0] text-sm md:text-base mb-5">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="flex items-center bg-[#232732] p-5 md:p-8 lg:p-10 rounded-2xl text-sm md:text-md gap-4 md:gap-5 lg:gap-7">
        <div className="border-[#2a2e3b] border-r-2 flex-1">
          <h3 className="text-[#8A92A0]">Exercises</h3>
          <span className="text-[#CCFF00] font-bold text-xl md:text-2xl lg:text-3xl">
            2
          </span>
        </div>
        <div className="border-[#2a2e3b] border-r-2 flex-1">
          <h3 className="text-[#8A92A0]">Minutes</h3>
          <span className="font-bold text-xl md:text-2xl lg:text-3xl">30</span>
        </div>
        <div className=" flex-1">
          <h3 className="text-[#8A92A0]">Calories</h3>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold">120</span>
        </div>
      </div>

      <div className="my-10">
       
        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Today&apos;s Plan"
          />
          <div className="tab-content border-base-300 p-6">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Saved"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyPlan;
