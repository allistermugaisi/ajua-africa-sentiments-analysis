import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Button } from "../ui/button";

import engagement from "../../assets/engagement.png";
import service from "../../assets/service.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = ({ sidebar, width, toggleSidebar }) => {
  return (
    <div
      className={`h-[100vh] ${
        sidebar ? "w-60" : "w-20"
      } fixed bg-[#F7F8FA] dark:bg-[#131313] border-r border-[#EBECF2] dark:border-[#171823]`}
    >
      <div
        className={`logo_content flex ${
          sidebar ? "justify-between px-2" : "justify-center"
        } items-center w-full h-20 border-b border-[#EBECF2] dark:border-[#171823]`}
      >
        <div
          className={`logo flex items-center h-[3.125rem] ${
            sidebar ? "block" : "hidden"
          }`}
        >
          <img
            src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1707373129/mechconnect/MECH_CONNECT-01_n0hsyx.png"
            alt="Mechconnect Logo"
            className="logo-img w-[9.375rem]"
            loading="lazy"
          />
        </div>
        <button
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <ul className="mt-4 h-[calc(100%-6.05rem)]">
        {links.map((link) => (
          <li
            key={link.id}
            className={`tooltip-container flex ${
              sidebar
                ? "justify-start mx-2 rounded-lg"
                : "justify-center mx-4 rounded-full"
            } h-12 hover:bg-gray-200`}
          >
            <NavLink
              to={link.link}
              className={`flex items-center justify-start space-x-3 ${
                sidebar ? "pl-4" : "pl-0"
              } leading-10`}
            >
              {sidebar ? (
                <>{link.icon()}</>
              ) : (
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>{link.icon()}</TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <span
                className={`${
                  sidebar ? "block" : "hidden"
                } whitespace-nowrap text-base leading-10`}
              >
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

const links = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard/home",
    icon: () => (
      <svg
        fill="none"
        className="w-6 h-6 leading-10"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Web Scrapping",
    link: "/dashboard/web-scrapping",
    icon: () => (
      <svg
        fill="none"
        className="w-6 h-6 leading-10"
        strokeWidth={1.5}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Sentiment Analysis",
    link: "/dashboard/sentiment-analysis",
    icon: () => (
      <svg
        fill="none"
        className="w-6 h-6 leading-10"
        strokeWidth={1.5}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Topic Modelling",
    link: "/dashboard/topic-modelling",
    icon: () => <img className="h-6" src={service} alt="Service Icon" />,
  },
  {
    id: 5,
    name: "Insights",
    link: "/dashboard/insights",
    icon: () => (
      <svg
        fill="none"
        className="w-6 h-6 leading-10"
        strokeWidth={1.5}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Engagements",
    link: "/dashboard/engagements",
    icon: () => <img className="h-6" src={engagement} alt="Engagement Icon" />,
  },
  {
    id: 7,
    name: "Users",
    link: "/dashboard/users",
    icon: () => (
      <svg
        fill="none"
        className="w-6 h-6 leading-10"
        strokeWidth={1.5}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
];
