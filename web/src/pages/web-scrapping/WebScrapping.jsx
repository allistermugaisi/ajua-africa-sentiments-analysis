import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { formatDate } from "../../lib/utils";
import { Card } from "@tremor/react";

const WebScrapping = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call fetchData function when component mounts
    fetchData();
  }, [date]);

  const fetchData = async () => {
    try {
      // Set loading state to true before fetching data
      setIsLoading(true);

      // Fetch data from the API
      const response = await fetch("http://127.0.0.1:8080/web-scraping");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();

      // Update state with fetched data
      setData(jsonData);
      setIsLoading(false); // Set loading state to false after data is fetched
    } catch (error) {
      // Set error state if an error occurs during fetching
      setError(error.message);
      setIsLoading(false); // Set loading state to false if an error occurs
    }
  };

  return (
    <div className="xl:container mx-auto pt-8 px-7 xl:px-10 py-4 min-h-[43.875rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-start justify-start w-auto">
            <p className="text-[16px] font-semibold text-red-500">
              View web scraped data
            </p>
            <h4 className="text-[24px] font-semibold">Web Scraping</h4>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="gap-2.5 hidden lg:flex px-[16px] py-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2 9.79483C2 6.70067 2 5.15318 2.9376 4.19236C3.8744 3.23071 5.3832 3.23071 8.4 3.23071H11.6C14.6168 3.23071 16.1256 3.23071 17.0624 4.19236C18 5.15318 18 6.70067 18 9.79483V11.4359C18 14.53 18 16.0775 17.0624 17.0383C16.1256 18 14.6168 18 11.6 18H8.4C5.3832 18 3.8744 18 2.9376 17.0383C2 16.0775 2 14.53 2 11.4359V9.79483Z"
                stroke="black"
                strokeWidth="1.37144"
              />
              <path
                d="M5.9999 3.23077V2M13.9999 3.23077V2M2.3999 7.33334H17.5999"
                stroke="black"
                strokeWidth="1.37144"
                strokeLinecap="round"
              />
              <path
                d="M14.8002 13.8974C14.8002 14.115 14.7159 14.3237 14.5659 14.4776C14.4159 14.6314 14.2124 14.7179 14.0002 14.7179C13.788 14.7179 13.5845 14.6314 13.4345 14.4776C13.2845 14.3237 13.2002 14.115 13.2002 13.8974C13.2002 13.6798 13.2845 13.4711 13.4345 13.3172C13.5845 13.1633 13.788 13.0769 14.0002 13.0769C14.2124 13.0769 14.4159 13.1633 14.5659 13.3172C14.7159 13.4711 14.8002 13.6798 14.8002 13.8974ZM14.8002 10.6153C14.8002 10.8329 14.7159 11.0416 14.5659 11.1955C14.4159 11.3494 14.2124 11.4358 14.0002 11.4358C13.788 11.4358 13.5845 11.3494 13.4345 11.1955C13.2845 11.0416 13.2002 10.8329 13.2002 10.6153C13.2002 10.3977 13.2845 10.189 13.4345 10.0351C13.5845 9.88125 13.788 9.7948 14.0002 9.7948C14.2124 9.7948 14.4159 9.88125 14.5659 10.0351C14.7159 10.189 14.8002 10.3977 14.8002 10.6153ZM10.8002 13.8974C10.8002 14.115 10.7159 14.3237 10.5659 14.4776C10.4159 14.6314 10.2124 14.7179 10.0002 14.7179C9.78802 14.7179 9.58454 14.6314 9.43451 14.4776C9.28448 14.3237 9.2002 14.115 9.2002 13.8974C9.2002 13.6798 9.28448 13.4711 9.43451 13.3172C9.58454 13.1633 9.78802 13.0769 10.0002 13.0769C10.2124 13.0769 10.4159 13.1633 10.5659 13.3172C10.7159 13.4711 10.8002 13.6798 10.8002 13.8974ZM10.8002 10.6153C10.8002 10.8329 10.7159 11.0416 10.5659 11.1955C10.4159 11.3494 10.2124 11.4358 10.0002 11.4358C9.78802 11.4358 9.58454 11.3494 9.43451 11.1955C9.28448 11.0416 9.2002 10.8329 9.2002 10.6153C9.2002 10.3977 9.28448 10.189 9.43451 10.0351C9.58454 9.88125 9.78802 9.7948 10.0002 9.7948C10.2124 9.7948 10.4159 9.88125 10.5659 10.0351C10.7159 10.189 10.8002 10.3977 10.8002 10.6153ZM6.8002 13.8974C6.8002 14.115 6.71591 14.3237 6.56588 14.4776C6.41585 14.6314 6.21237 14.7179 6.0002 14.7179C5.78802 14.7179 5.58454 14.6314 5.43451 14.4776C5.28448 14.3237 5.2002 14.115 5.2002 13.8974C5.2002 13.6798 5.28448 13.4711 5.43451 13.3172C5.58454 13.1633 5.78802 13.0769 6.0002 13.0769C6.21237 13.0769 6.41585 13.1633 6.56588 13.3172C6.71591 13.4711 6.8002 13.6798 6.8002 13.8974ZM6.8002 10.6153C6.8002 10.8329 6.71591 11.0416 6.56588 11.1955C6.41585 11.3494 6.21237 11.4358 6.0002 11.4358C5.78802 11.4358 5.58454 11.3494 5.43451 11.1955C5.28448 11.0416 5.2002 10.8329 5.2002 10.6153C5.2002 10.3977 5.28448 10.189 5.43451 10.0351C5.58454 9.88125 5.78802 9.7948 6.0002 9.7948C6.21237 9.7948 6.41585 9.88125 6.56588 10.0351C6.71591 10.189 6.8002 10.3977 6.8002 10.6153Z"
                fill="black"
              />
            </svg>

            <h3 className="text-sm text-[#26282C] dark:text-[#D3D5D9] font-medium">
              {formatDate(date || new Date())}
            </h3>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <Card
          className="mx-auto max-w-xs"
          decoration="bottom"
          decorationColor="blue"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Total analyzed sentiments
          </p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            {data ? data.length : 0}
          </p>
        </Card>
      </div>
      <div className="mx-0 mt-8">
        <Table className="whitespace-nowrap">
          <TableCaption>A list of web scraped data.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <>
                {data && (
                  <>
                    {data.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell className="font-medium">
                          {item._id}
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.source}</TableCell>
                        <TableCell>{item.link}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WebScrapping;
