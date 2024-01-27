import React from "react";
import { config } from "@/constant";

function PortfolioInfo() {
  return (
    <div className="py-12 flex flex-col md:flex-row lg:justify-center gap-10 md:gap-0">
      {config.info.data.map((d, index) => {
        return (
          <div key={index.toString()} className={`md:border-r md:border-r-green-300 md:w-1/3 md:text-center md:last:border-r-0`} data-aos="fade-up">
            <h3 className="text-4xl lg:text-5xl font-bold text-green-600">
              {d.title}
            </h3>
            <p className="text-lg mt-1 text-slate-500">{d.subTitle}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioInfo;
