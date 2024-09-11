import AboutMeSection from "./AboutMeSection";
import RecommendedSection from "./RecommendedSection";
import ExperiencesSection from "./ExperiencesSection";
import { useState } from "react";
import { HelpCircle } from "lucide-react";
import "../App.css";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = ["About Me", "Experiences", "Recommended"];

  return (
    <div className="bg-[#363C43] rounded-2xl p-4 w-full relative">
      <HelpCircle size={20} className="text-gray-500 absolute top-4 left-4" />
      <div className="rounded-xl bg-[#171717] p-1 w-10/12 mx-auto shadow-[#171717]">
        <div className="flex space-x-1">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveTab(index)}
              className={`
              relative w-full py-2.5 text-sm font-medium leading-5 
               rounded-xl 
              ${
                activeTab === index
                  ? "text-gray-100 bg-[#28292F]"
                  : "text-gray-400 hover:text-gray-100 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#28292F] duration-[700ms,1000ms] transition-[color,box-shadow]"
              }
            `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 h-40 overflow-y-auto pr-2 text-gray-400 leading-relaxed custom-scrollbar">
        {activeTab === 0 && <AboutMeSection />}
        {activeTab === 1 && <ExperiencesSection />}
        {activeTab === 2 && <RecommendedSection />}
      </div>
    </div>
  );
}
