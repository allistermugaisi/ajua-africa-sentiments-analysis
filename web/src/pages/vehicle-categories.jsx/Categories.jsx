import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format, set } from 'date-fns'
import CustomDrawer from '@/utils/CustomDrawer'
import Button from '@/utils/CustomButton'


const VehicleCategories = () => {

    const URL = "https://api.mechconnect.app/api/v1/vehicle-categories"
    const [vehicleCategories, setVehicleCategories] = useState([])

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${URL}`)
            const data = await response.data
            setVehicleCategories(data.vehicleCategories)

        } catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)

    // create a new category
    const handleSubmit = async (e) => {
        setButtonLoading(true)
        e.preventDefault()
        const data = new FormData(e.target)
        const name = data.get('name')
        const description = data.get('description')
        const payload = { name, description }
        try {

            await axios.post(`${URL}`, payload)
            setButtonLoading(false)
            fetchCategories()
            setIsOpen(false)
        } catch (error) {
            console.log(error)
            setButtonLoading(false)
        }
    }


    return (
        <div className=''>
            <div className='border-b pb-2 flex justify-between items-center'>
                <h1 className='text-lg font-bold'>Vehicle categories</h1>
                <button onClick={() => setIsOpen(true)} className='p-2 bg-gray-700 rounded text-white'>
                    Add category
                </button>
            </div>
            <div>
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200  text-gray-700 text-left uppercase text-sm ">
                            <th className="p-2"> Name</th>
                            <th className="p-2">Description</th>
                            <th className="p-2">Created At</th>
                            <th className="p-2">Created By</th>
                            <th className="p-2">Updated By</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleCategories.map((category, index) => {
                            const { name, description, createdAt, created_by, updated_by } = category;
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
                <h2 className='text-lg border-b py-2 text-blue-800'>Add vehicle category</h2>

                <div>
                    <form onSubmit={handleSubmit} className=' space-y-4 py-5'>
                        <div className='flex flex-col'>
                            <label >Name</label>
                            <input type="text" name="name" placeholder='Sedan,Suv,Truck etc..' className='p-2 border outline-none rounded' />
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

export default VehicleCategories
