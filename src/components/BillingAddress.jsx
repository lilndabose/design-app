import React from "react";


const BillingAddress=()=>{
    return(
        <div className='w-full h-full ml-3'>
            <span className='text-md font-bold my-3 mr-3 py-2 text-[#232e3e]' style={{fontSize:'13px'}}>Billing Address</span>

            <div class="flex items-center mt-2">
                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-orange-500 rounded-full accent-orange-500 focus:ring-white dark:focus:ring-orange-500 dark:ring-offset-orange-500 focus:ring-2 text-white dark:bg-orange-400 dark:border-orange-400" />
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Same as home address</label>
            </div>

            <div className='w-full flex justify-around items-center mt-2'>
                <div className='w-1/2 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'14px',fontWeight:'600'}} className="text-gray-600">First Name</label>
                    <input type="text" className="w-full h-[20px] border-0 text-xs pl-1 outline-none rounded-sm text-gray-800"/>
                </div>

                <div className='w-1/2 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'14px',fontWeight:'600'}} className="text-gray-600">Last Name</label>
                    <input type="text" className="w-full h-[20px] border-0 text-xs pl-1 outline-none rounded-sm text-gray-800"/>
                </div>
            </div>

            <div className='w-full flex justify-around items-center mt-1'>
                <div className='w-1/2 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'14px',fontWeight:'600'}} className="text-gray-600">Address Line 1:</label>
                    <input type="text" className="w-full h-[20px] border-0 text-xs pl-1 outline-none rounded-sm text-gray-800"/>
                </div>

                <div className='w-1/2 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'14px',fontWeight:'600'}} className="text-gray-600">Address Line 2:</label>
                    <input type="text" className="w-full h-[20px] border-0 text-xs pl-1 outline-none rounded-sm text-gray-800"/>
                </div>
            </div>

            <div className='w-full flex justify-around items-center mt-1'>
                <div className='w-1/4 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'14px',fontWeight:'600'}} className="text-gray-600">Country:</label>
                    <input type="text" disabled value="US" className="w-full h-[20px] border-2 text-xs pl-1 border-gray-200 outline-none rounded-sm text-gray-800"/>
                </div>

                <div className='w-1/4 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'12px',fontWeight:'600'}} className="text-gray-600">State/Province/Region:</label>
                    <select type="text" className="w-full h-[20px] border-0 text-xs pl-1 outline-none rounded-sm text-gray-800">
                    <option selected>Select</option>
                    <option>New York</option>
                    <option>Antario</option>
                    </select>
                </div>
                <div className='w-1/4 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'14px',fontWeight:'600'}} className="text-gray-600">City:</label>
                    <input type="text" style={{fontSize:'12px'}} placeholder="Enter city name" className="w-full h-[20px] border-0 text-xs pl-1 outline-none rounded-sm text-gray-800"/>
                </div>

                <div className='w-1/4 flex flex-col items-start mr-2'>
                    <label style={{fontSize:'14px',fontWeight:'600'}} className="text-gray-600">Zip Code:</label>
                    <input type="text"   placeholder="Enter zip code" className="w-full h-[20px] border-0 text-xs pl-1 outline-none rounded-sm text-gray-800"/>
                </div>
            </div>

            <div className="float-right">
                <button type="button" className="text-gray-200 bg-[#232e3e] hover:bg-[#31435e] mt-2 cursor-pointer mr-2 font-sm rounded-sm text-sm px-2 py-1 mb-1">Edit Details</button>
            </div>

        </div>
    )
}

export default BillingAddress;