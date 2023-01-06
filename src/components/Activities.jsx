import React from 'react'
import { activities } from '../constants'
import { IoIosPeople } from "react-icons/io";

const Activities=()=>{
    return(
        <div className='w-full h-full'>
            <div className='w-full h-10 mr-1 px-2 flex justify-between items-center'>
                <span className='text-md font-bold' style={{fontSize:'13px'}}>Activities</span>
                <button type="button" style={{fontSize:'10px'}} className="text-gray-50 font-semibold bg-[#0c611a] rounded-sm text-sm px-2 py-1">View All</button>
            </div>

            {/* mapping through all the activities */}
            <div className='w-full h-full flex flex-col'>
                {
                    activities.map((item,index)=>{
                        return(
                            <div key={index} className='w-full h-auto flex justify-center items-center mb-1 mr-1'>
                                <div className='w-9 h-8 ml-2 rounded-2xl bg-[#dee8ff]  flex justify-center items-center'>
                                    <IoIosPeople color='#616b7d'/>
                                </div>
                                <div className='w-[90%] flex items-start flex-col ml-2'>
                                    <span style={{fontSize:'13px'}}>{item.text} <b style={{color:'orange'}}>{item.action}</b></span>
                                    <span style={{fontSize:'13px'}} className='text-gray-300'>{item.date}</span>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
            
        </div>
    )
}

export default Activities