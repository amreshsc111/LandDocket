import React, { useContext } from 'react'
import LandRegistrationContext from '../../context/LandRegistrationContext'

export default function AddLand() {
    const {formData, handleChange, addLandTo} = useContext(LandRegistrationContext);

    const handleSubmit = (e) => {
        const {landId,area,city,pradesh,propertyId,document}= formData;
        e.preventDefault();
        addLandTo();
    }

    return (
        <div>
		<div className="flex flex-col items-center min-h-screen pt-2 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <h3 className="text-4xl font-bold text-gray-600">
                        Add Land
                    </h3>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="area"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Area (in sq.m)
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="number"
                                    name="area"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                City
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="city"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="Pradesh"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Pradesh
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="province"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="Property ID"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Property ID
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="number"
                                    name="propertyId"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
						<div className="mt-4">
                            <label
                                htmlFor="Document"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Document
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="file"
                                    name="document"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button 
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                onChange={handleSubmit}    
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}