import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format, set } from 'date-fns'
import CustomDrawer from '@/utils/CustomDrawer'
import toast from 'react-hot-toast'
import Button from '@/utils/CustomButton'


const Model = () => {

    const URL = "https://api.mechconnect.app/api/v1/vehicle-models"
    const [vehicleCategoryLoading, setVehicleCategoryLoading] = useState(false)
    const [vehicleMakeLoading, setVehicleMakeLoading] = useState(false)    
    const [vehicleModels, setVehicleModels] = useState([])
    const [vehicleMakes, setVehicleMakes] = useState([])
    const [vehicleCategories, setVehicleCategories] = useState([])

    const fetchVehiceModels = async () => {
        try {
            const response = await axios.get(`${URL}`)
            const data = await response.data
            setVehicleModels(data.vehicleModels)


        } catch (error) {
            console.log(error)
            toast.error(`${error.response.data.message}`)
        }

    }

    useEffect(() => {
        fetchVehiceModels()
    }, [])
    // get vehicle makes and categories 
    const fetchVehicleMakes = async () => {
        try {
            setVehicleMakeLoading(true)
            const response = await axios.get("https://api.mechconnect.app/api/v1/vehicle-makes")
            const data = await response.data
            setVehicleMakes(data.vehicleMakes)
            setVehicleMakeLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleMakeSelect = () => {
        if (!vehicleMakes.length && !vehicleMakeLoading) {
            fetchVehicleMakes();
        }
    };

    const fetchCategories = async () => {
        try {
            setVehicleCategoryLoading(true)
            const response = await axios.get("https://api.mechconnect.app/api/v1/vehicle-categories")
            const data = await response.data
            setVehicleCategories(data.vehicleCategories)
            setVehicleCategoryLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCategorySelect = () => {
        if (!vehicleCategories.length && !vehicleCategoryLoading) {
            fetchCategories();
        }
    };


    // create a new model
    const [isOpen, setIsOpen] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)


    const handleSubmit = async (e) => {
        setButtonLoading(true)
        e.preventDefault()
        const data = new FormData(e.target)
        const name = data.get('name')
        const description = data.get('description')
        const vehicle_make_id = data.get('vehicle_make')
        const vehicle_category_id = data.get('vehicle_category')
        const payload = { name, description, vehicle_make_id, vehicle_category_id, created_by: "65d5fe12a7ce669bd59de65b", updated_by: "65d5fe12a7ce669bd59de65b" }
        try {
            console.log("payload", payload)
            const response = await axios.post(`${URL}`, payload)
            setButtonLoading(false)
            fetchVehiceModels()
            setIsOpen(false)
        } catch (error) {
            console.log(error)
            setButtonLoading(false)
        }
    }





    return (
        <div className=''>
            <div className='border-b pb-2 flex justify-between items-center'>
                <h1 className='text-lg font-bold'>Vehicle Models</h1>
                <button onClick={() => setIsOpen(true)} className='p-2 bg-gray-700 rounded text-white'>
                    Add model
                </button>
            </div>
            <div>
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200  text-gray-700 text-left uppercase text-sm ">
                            <th className="p-2"> Name</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Make</th>
                            <th className="p-2">Created At</th>
                            <th className="p-2">Created By</th>
                            <th className="p-2">Updated By</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleModels.map((model, index) => {
                            const { name, description, vehicle_make, vehicle_category, createdAt, created_by, updated_by } = model;
                            const even = index % 2 == 0;
                            return (
                                <tr
                                    key={index}
                                    className={
                                        !even
                                            ? "bg-gray-100 text-gray-600 "
                                            : "bg-white text-gray-600 "
                                    }
                                >
                                    <td className="p-2">{name}</td>
                                    <td className="p-2">{description || "Null"}</td>
                                    <td className="p-2">{vehicle_category.name}</td>
                                    <td className="p-2">{vehicle_make.name}</td>
                                    <td className="p-2">
                                        {format(new Date(createdAt), "do MMM yyyy")}

                                    </td>
                                    <td className="p-2">{created_by.name}</td>
                                    <td className="p-2">{updated_by.name}</td>


                                    <td className="p-2 flex space-x-3">
                                        <i

                                            class="cursor-pointer bx bx-sm bx-edit"
                                        ></i>
                                        <i class="cursor-pointer bx bx-sm bx-trash text-red-600"></i>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <CustomDrawer isOpen={isOpen} >
                <h2 className='text-lg border-b py-2 text-blue-800'>Add vehicle model</h2>
                <div>
                    <form onSubmit={handleSubmit} className=' space-y-4 py-5'>
                        <div className='flex flex-col'>
                            <label >Vehicle make</label>
                            <select name="vehicle_make" onClick={handleMakeSelect} className='p-2 border outline-none rounded'>
                                {vehicleMakeLoading ? (
                                    <option>Loading...</option>
                                ) : (
                                    <>
                                        <option value="">Select vehicle make</option>
                                        {vehicleMakes.map(vehicleMake => (
                                            <option key={vehicleMake._id} value={vehicleMake._id}>
                                                {vehicleMake.name}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                        </div>

                        <div className='flex flex-col'>
                            <label >Vehicle category</label>
                            <select name="vehicle_category" onClick={handleCategorySelect} className='p-2 border outline-none rounded'>
                                {vehicleCategoryLoading ? (
                                    <option>Loading...</option>
                                ) : (
                                    <>
                                        <option value="">Select vehicle category</option>
                                        {vehicleCategories.map(vehicleCategory => (
                                            <option key={vehicleCategory._id} value={vehicleCategory._id}>
                                                {vehicleCategory.name}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                        </div>

                        <div className='flex flex-col'>
                            <label >Name</label>
                            <input type="text" name="name" placeholder='Corolla,X6,CX-5 etc' className='p-2 border outline-none rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label >Description</label>
                            <input type="text" name='description' className='p-2 border outline-none rounded' />
                        </div>
                        <div className='flex justify-end space-x-3'>
                            <Button loading={buttonLoading} title="submit" />
                            <div className='px-3 py-2  bg-gray-200 rounded' onClick={() => setIsOpen(false)}>Close</div>
                        </div>


                    </form>
                </div>

            </CustomDrawer>

        </div>
    )
}

export default Model
