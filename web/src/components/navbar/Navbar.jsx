import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "../../lib/utils";

const Navbar = ({ sidebar }) => {
  const [open, setOpen] = useState(false);

  // TODO: make notifications go off
  const [isNewNotification] = useState(true);

  return (
    <nav
      className={`px-8 mb-0 ${
        sidebar ? "ml-60 w-[calc(100%-15rem)]" : "ml-20 w-[calc(100%-5rem)]"
      } z-40 fixed bg-[#FAFAFA] dark:bg-[#121212] dark:border-[#171823] h-20 border border-b border-[#E5EAEF] flex items-center justify-between`}
    >
      <h1 className="hidden text-[#26282C] dark:text-[#D3D5D9] text-lg font-semibold cursor-pointer lg:block lg:text-xl">
        Dashboard
      </h1>
      <div
        className="border hover:bg-[#B2ABAB]/10 cursor-pointer border-[#DADDDD] dark:border-[#262626] lg:hidden flex items-center justify-center px-[15px] py-[18px] rounded-full"
        onClick={() => setOpen(!open)}
      >
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="fill-[#78828A] dark:fill-"
            x="0.5"
            width="15"
            height="2"
            rx="1"
          />
          <rect x="0.5" y="4" width="15" height="2" rx="1" fill="#78828A" />
          <rect x="0.5" y="8" width="15" height="2" rx="1" fill="#78828A" />
        </svg>
      </div>
      <div className="flex gap-2 flex-row items-center justify-center sm:gap-[22px]">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative border-[0.769px] cursor-pointer border-[#DADDDD] hidden lg:flex items-center justify-center p-[11px] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                className="fill-[#0D062D] dark:fill-[#D9D2F9]"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"
                fill="#0D062D"
              />
            </svg>
            {isNewNotification && (
              <span className="absolute top-2 right-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-red-600" />
                </span>
              </span>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="space-y-1">
              {NOTIFICATION_DATA.map((notification, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-3 p-3 cursor-pointer hover:bg-accent rounded-2xl"
                  >
                    <Avatar>
                      <AvatarImage
                        alt="user image"
                        src={notification.image + "?random" + index}
                      />
                      <AvatarFallback>
                        {getInitials(notification.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold tracking-tight scroll-m-20">
                          {notification.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.date}
                        </p>
                      </div>
                      <p className="w-[280px] text-sm">
                        {notification.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer flex gap-[8px] items-center justify-center border-[0.769px] border-[#DADDDD] rounded-full px-[8px] py-[4px]">
            <Avatar>
              {DATA.image ? <AvatarImage src={DATA.image} alt="image" /> : null}
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex gap-[1px] flex-col items-end justify-center inter">
              <h3 className="text-base text-[#26282C] dark:text-[#D3D5D9]">
                Allister Mugaisi
              </h3>
              <h4 className="text-sm text-[#787486]">
                allistermugaisi@gmail.com
              </h4>
            </div>

            <div className="hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="pl-2 w-fit"
              >
                <path
                  d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                  fill="#0D062D"
                />
              </svg>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="#" className="py-3">
                  <svg
                    className="h-6 mr-2"
                    fill="none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span>Account Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <svg
                  className="h-6 mr-2"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>Billing</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <svg
                className="h-6 mr-2"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {open ? (
        <div className="fixed lg:hidden top-0 bottom-0 my-auto z-50 h-[100vh] w-full flex items-start justify-start">
          <div className="w-fit ml-[150px] h-[100vh] my-auto flex items-start justify-center">
            {/* <MobileSidebar /> */}
          </div>

          <div
            className="bg-black/50 h-[100vh] w-full flex items-center justify-start"
            onClick={() => setOpen(!open)}
          ></div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;

const DATA = {
  username: "Allister Mugaisi",
  email: "allistermugaisi@gmail.com",
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocLhD8JXKmWZ5cZ7xQYfozDFs6cLTCneElIbqiN_IiBSRw8=s96-c",
};

const NOTIFICATION_DATA = [
  {
    name: "Louwra Croth",
    date: "Just now",
    content: "Lorem ipsum dolor sit amet ipsum consectetur adipisicing elit.",
    image: "https://picsum.photos/200",
  },
  {
    name: "Banner Durello",
    date: "1 minute ago",
    content: "Lorem ipsum dolor sit amet con adipi elit. Eaque, atque!",
    image: "https://picsum.photos/200",
  },
];
