import axios from 'axios';
import React, { useEffect, useState } from 'react';
import profile from "../assets/profile.png";
import { Link } from 'react-router-dom';
import uniqid from "uniqid";

function Listview() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/index")
        .then((response)=> {
            setData(response.data.data);
        });
    }, []);

    const convertTimeStampToDateTime = (isoString) => {
        const date = new Date(isoString);

        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based, so +1
        const day = ('0' + date.getDate()).slice(-2);

        const formattedDateTime = `${year}-${month}-${day}`;
        return formattedDateTime;
    }

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
                            data.map((item) => {
                                return <>
                                    <div key={uniqid()}>{item.name}</div>
                                    <div key={uniqid()}>{item.email}</div>
                                    <div key={uniqid()}>{item.message}</div>
                                    <div key={uniqid()} className="flex items-center">
                                        {/* <img src="https://toppng.com/uploads/preview/pikachu-logo-115510579622mch5qulg6.png" alt="Photo" className="w-10 h-10 rounded-full object-cover" /> */}
                                        <img src={profile} alt="Photo" className="w-10 h-10 rounded-full object-cover" />
                                    </div>
                                    <div key={uniqid()}>{item.gender}</div>
                                    <div key={uniqid()}>{item?.isAcknowledge?.toString().toUpperCase()}</div>
                                    <div key={uniqid()}>{convertTimeStampToDateTime(item.createdAt)}</div>
                                    <div key={uniqid()}>{convertTimeStampToDateTime(item.updatedAt)}</div>

                                    <div key={uniqid()} className="flex gap-5">
                                        <Link to={`/edit/${item._id}`}>
                                            <button key={uniqid()} className="bg-gray-600 text-gray-200 px-3 py-1 rounded hover:bg-gray-500" value="edit">Edit</button>
                                        </Link>

                                        <Link to={`/delete/${item._id}`}>
                                            <button key={uniqid()}className="bg-red-600 text-gray-200 px-3 py-1 rounded hover:bg-red-500" value="delete">Delete</button>
                                        </Link>
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