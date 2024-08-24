import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Listview() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/index")
        .then((response)=> {
            setData(response.data.data);
        });
    }, []);
  return (
   <>
   <div className='bg-gray-900 text-gray-100"'>
        <div className="container mx-auto p-6">
            <div className="bg-gray-800 rounded-lg shadow-lg">
                <div className="grid grid-cols-9 text-gray-300 font-semibold border-b border-gray-700 bg-gray-700 p-4">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Message</div>
                    <div>Photo</div>
                    <div>Gender</div>
                    <div>Policy Accepted</div>
                    <div>Created At</div>
                    <div>Updated At</div>
                    <div>Action</div>
                </div>
                <div className="divide-y divide-gray-700">
                    <div className="grid grid-cols-9 gap-5 text-gray-400 p-4">
                        {
                            data.map((item, index) => {
                                return <>
                                    <div key={index}>John Doe</div>
                                    <div key={index}>john@example.com</div>
                                    <div key={index}>Hello World</div>
                                    <div key={index} className="flex items-center justify-center">
                                        <img src="photo.jpg" alt="Photo" className="w-10 h-10 rounded-full object-cover" />
                                    </div>
                                    <div key={index}>Male</div>
                                    <div key={index}>Yes</div>
                                    <div key={index}>2024-08-24</div>
                                    <div key={index}>2024-08-24</div>
                                    <div key={index*1} className="flex gap-5">
                                        <button key={index} className="bg-gray-600 text-gray-200 px-3 py-1 rounded hover:bg-gray-500">Edit</button>
                                        <button key={index*2}className="bg-red-600 text-gray-200 px-3 py-1 rounded hover:bg-red-500">Delete</button>
                                    </div>
                                </>
                            })
                        }    
                    </div>
                </div>
            </div>
        </div>
   </div>
   </>
  )
}

export default Listview;