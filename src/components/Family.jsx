import React,{useState} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { avatar,admin } from '../assets';
import { family } from '../constants/index'

const Family=()=>{

    const [isVisible,setIsVisible] = useState(false)
    const inputStyle ={
        visibility: `${isVisible ? 'visible': 'hidden'}`
    }

    return(
        <div className='w-full h-full'>
             <div className='w-full h-10 mr-1 px-2 flex justify-between items-center'>
                <span className='text-md font-bold' style={{fontSize:'13px'}}>Family</span>
                <div className='w-1/2 h-full flex justify-between items-center ml-6'>
                    <input type="text" style={inputStyle}  placeholder="Enter zip code" className="w-[90%] h-[33px] border-2 border-gray-300 text-xs p-1 outline-none rounded-md text-gray-800" />
                    <AiOutlineSearch onClick={()=>setIsVisible(!isVisible)} size={22} className="cursor-pointer" />
                </div>
                <button type="button" style={{fontSize:'10px'}} className="text-gray-50 font-semibold bg-[#0c611a] rounded-sm text-sm px-2 py-1">Add New</button>
            </div>

            <div className='w-[96%] h-[50px] mb-1 flex justify-between items-center mx-2 bg-[#F8991F] rounded-md'>
                <div className='w-[40%] h-full flex justify-around items-center'>
                    <img className="w-[35px] h-[35px] rounded-full" src={avatar} alt="Rounded_avatar" />
                    <span className='text-sm font-medium text-black'>John Smith</span>
                </div>

                <div className='w-1/2 h-full flex justify-around items-center'>
                    <button type="button" class="text-black bg-white  font-medium rounded-sm text-xs px-[20px] py-1 mb-1">ADMIN</button>
                    <button type="button" class="text-black bg-white hover:bg-blue-800  font-medium rounded-sm p-2">
                        <img src={admin} className="h-2 w-3" />
                    </button>
                </div>
            </div>

            {
                family.map((item,index)=>{
                    return(
                        <div key={index} className='w-[96%] h-[40px] mb-1 flex justify-between items-center mx-2 bg-[#DEE8FF] rounded-md'>
                            <div className='w-[60%] h-full flex justify-around items-center'>
                                <img className="w-[20%] h-[35px] rounded-full" src={item.image} alt="Rounded_avatar" />
                                <span className='w-[70%] text-xs pl-1 font-medium text-black'>{item.name}</span>
                            </div>

                            <div className='w-1/3 h-full flex justify-around items-center'>
                                <button type="button" className="text-[#232E3E] bg-[#CAD7F5] text-xs 
                                font-bold rounded-sm text-sm px-3 py-1 mb-1 text-uppercase">{item.buttonText}</button>
                            </div>
                        </div>
                    )
                })
            }
            

        </div>
    )
}

export default Family;