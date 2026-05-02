import { getSkinCareTips } from "@/lib/fetchJsonData";
import React from "react";
import TipsCard from "./TipsCard";

const SkinCareTips = async () => {
  const tips = await getSkinCareTips();
//   console.log(tips);
  return (
    <div className="py-9 container mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Summer Care Tips
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-9 px-4">
        {tips.map((tip, ind) => (
          <TipsCard key={ind} tip={tip}></TipsCard>
        ))}
      </div>
    </div>
  );
};

export default SkinCareTips;
