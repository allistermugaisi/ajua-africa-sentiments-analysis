import React from "react";
import { Button } from "@/components/ui/button";

const SentimentAnalysis = () => {
  return (
    <div>
      <h1 className="text-center my-8 text-3xl font-semibold">
        Text Sentiment Analysis
      </h1>
      <div className="flex justify-center items-center gap-4">
        <div className="relative block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-[16px] pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.5 2C16.75 2 21 6.25 21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 7.8 4.11 4.6 7.2 3.03"
                stroke="#78828A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#78828A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-[250px] hover:bg-[#B2ABAB]/10 dark:hover:bg-[#B2ABAB]/10 xl:w-[333px] p-3 ps-10 text-base dark:text-[#A3A3A3] text-gray-700 border border-[#DADDDD] rounded-[24px] dark:border-[#2E3232] bg-white dark:bg-[#0D0D0D] placeholder:text-[#A3A3A3] dark:placeholder:text-[#A3A3A3]"
            placeholder="Enter your sentiment..."
            required
          />
        </div>
        <Button variant="destructive">Analyze</Button>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
