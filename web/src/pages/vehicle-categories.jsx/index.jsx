

import React, { useState } from "react";
import VehicleCategories from "./Categories";
import Make from "./Make";
import VehicleModel from "./Models";


const CategoriesLanding = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [renderedComponent, setRenderedComponent] = useState(<VehicleCategories />);
    const loadComponent = (name, index) => {
        setActiveTab(index);
        switch (name) {
            case "Categories":
                setRenderedComponent(<VehicleCategories />);
                break;
            case "Make":
                setRenderedComponent(<Make />)
                break;
            case "Model":
                setRenderedComponent(<VehicleModel />)
                break;
            default:
                loadComponent;
                break;
        }
    };
    return (
        <div>

            <div className="p-5 space-y-6 ">

                <div className="grid  md:grid-cols-3   items-center  text-center rounded-md  bg-gray-300  w-full p-2">
                    {tabs.map((tab, index) => {
                        const { name } = tab;
                        return (
                            <div
                                key={index}
                                onClick={() => loadComponent(name, index)}
                                className={
                                    activeTab === index
                                        ? "md:text-xl cursor-pointer  p-1 rounded-lg  text-white bg-gray-700"
                                        : "md:text-xl cursor-pointer  p-1"
                                }
                            >
                                <p>{name}</p>
                            </div>
                        );
                    })}
                </div>
                <div>{renderedComponent}</div>
            </div>
        </div>
    );
};

export default CategoriesLanding;
const tabs = [
    {
        name: "Categories",
    },
    {
        name: "Make",
    },
    {
        name: "Model",
    },
];