import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Button } from "../ui/button";

import engagement from "../../assets/engagement.png";
import car from "../../assets/electric-car.png";
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
              to="/dashboard"
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
    name: "Cars",
    icon: () => <img className="h-6" src={car} alt="Cars Icon" />,
  },
  {
    id: 3,
    name: "Users",
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
  {
    id: 4,
    name: "Branches",
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
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Appointments",
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
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Engagements",
    icon: () => <img className="h-6" src={engagement} alt="Engagement Icon" />,
  },
  {
    id: 7,
    name: "Estimates",
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Services",
    icon: () => <img className="h-6" src={service} alt="Service Icon" />,
  },
  {
    id: 9,
    name: "Addons",
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
          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
        />
      </svg>
    ),
  },
];
