import React, { useState } from 'react'
import axios from "axios";
function Form() {
    const [formData, setFormData] = useState({});

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await axios.post("http://localhost:5000/create", formData); 
        console.log(response); 
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="form-container w-3/4">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='flex gap-8'>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="name" className="block text-white mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="mb-4 w-1/2">
                            <label htmlFor="email" className="block text-white mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="password" className="block text-white mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="file" className="block text-white mb-1">Upload File</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                className="w-full border border-gray-700 rounded bg-gray-800 text-white file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className='flex gap-8'>
                        <div className="mb-4 w-1/2">
                            <label htmlFor="message" className="block text-white mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <div className="mb-9">
                            <span className="block text-white mb-3">Gender: </span>
                            <div className='flex gap-8'>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        id="male"
                                        name="option"
                                        value="male"
                                        className="form-radio text-blue-500 focus:ring-blue-500"
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    />
                                    <label htmlFor="male" className="ml-2 text-white">Male</label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="option"
                                        value="female"
                                        className="form-radio text-blue-500 focus:ring-blue-500"
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    />
                                    <label htmlFor="female" className="ml-2 text-white">Female</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="other"
                                        name="option"
                                        value="other"
                                        className="form-radio text-blue-500 focus:ring-blue-500"
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    />
                                    <label htmlFor="other" className="ml-2 text-white">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="inline-flex items-center text-white">
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500"
                                onChange={(e) => setFormData({ ...formData, isAcknowledge: e.target.checked })}
                            />
                            <span className="ml-2 text-white">
                                By checking this box, I acknowledge that you have read and agree to our Privacy Policy and Terms of Service
                                You consent to our use of your personal data in accordance with these policies.
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form