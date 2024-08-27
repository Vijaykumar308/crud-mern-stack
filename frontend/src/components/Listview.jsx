import axios from 'axios';
import React, { useEffect, useState } from 'react';
import profile from "../assets/profile.png";

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
                                    <div key={index}>{item.name}</div>
                                    <div key={index}>{item.email}</div>
                                    <div key={index}>{item.message}</div>
                                    <div key={index} className="flex items-center">
                                        {/* <img src="https://toppng.com/uploads/preview/pikachu-logo-115510579622mch5qulg6.png" alt="Photo" className="w-10 h-10 rounded-full object-cover" /> */}
                                        <img src={profile} alt="Photo" className="w-10 h-10 rounded-full object-cover" />
                                    </div>
                                    <div key={index}>{item.gender}</div>
                                    <div key={index}>{item?.isAcknowledge?.toString().toUpperCase()}</div>
                                    <div key={index}>{item.createdAt}</div>
                                    <div key={index}>{item.modifiedAt}</div>
                                    <div key={index*1}>
                                        <form action={`action/${item._id}`} className="flex gap-5">
                                            <button key={index} className="bg-gray-600 text-gray-200 px-3 py-1 rounded hover:bg-gray-500" value="edit">Edit</button>
                                            
                                            <button key={index*2}className="bg-red-600 text-gray-200 px-3 py-1 rounded hover:bg-red-500" value="delete">Delete</button>
                                        </form>
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