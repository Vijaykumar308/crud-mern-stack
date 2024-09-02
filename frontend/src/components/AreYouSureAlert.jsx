import axios from 'axios'
import React from 'react'

function AreYouSureAlert({closeDialog, pkId, setData}) {

    const handleDelete = async(pkId) => {
       const responseOnDelete = await axios.delete(`http://localhost:5000/delete/${pkId}`, {id:pkId});
       console.log(responseOnDelete);
       setData(responseOnDelete.data.data);
       closeDialog(false);
    }
    
    return (
        <>
            <div id="popup" className="fixed inset-0 flex items-center justify-center">
                <div className="inset-0 bg-gray-600 bg-opacity-50 bg-blur"></div>
                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Are you sure you want to delete?</h2>
                        <p className="text-gray-600 mb-6">This action cannot be undone. Please confirm if you really want to delete this item.</p>
                        <div className="flex justify-end space-x-4">
                            <button id="cancelBtn" onClick={() => closeDialog(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600">Cancel</button>
                            <button id="confirmBtn" onClick={() => handleDelete(pkId)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </>
        
    
  )
}

export default AreYouSureAlert