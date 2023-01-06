import React,{useState} from 'react'
import { profile } from '../assets' 
import { AiOutlineCamera } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";


const Profile=()=>{
    const [preview,setPreview] = useState(null)
    const uploadImagePreview=(element)=>{
        element.click()
    }

  return(
    <div className='w-full h-full flex justify-around items-center'>
        <div className='w-[25%] h-full border-r-2 border-gray-200 flex justify-center items-center'>
            <div class="flex justify-center items-center">
                <div className=' flex justify-center items-center'>
                    <img class="w-[50px] h-[50px] ml-2 rounded-full" src={preview ? preview : profile} alt="profile_image" />
                    <button onClick={()=>uploadImagePreview(document.getElementById('file'))} className='position-relative cursor-pointer top-4 right-4 bg-white rounded-xl p-[2px] border-2 border-gray-200'>
                        <AiOutlineCamera />
                    </button>
                    <input type="file" onChange={(e)=>{
                        if(e.target.files.length>0){
                            setPreview(URL.createObjectURL(e.target.files[0]))
                        }
                        }} id="file" hidden />
                </div>
                <div>
                    <div className='font-bold text-300 dark:text-white'>John Smith</div>
                    <span style={{fontSize:'9px'}} className="center text-gray-400 w-full flex justify-center items-center">
                        <MdLocationPin color='#232e3e' />
                        Main St. Farmington, CA 123 
                    </span>
                </div>
            </div>
        </div>

        <div className='w-[30%] h-full ml-2 mt-2'>
            <div className='w-full flex justify-between items-center mb-1'>
                <label for="first_name" style={{fontSize:'13px'}}  className="block text-gray-500 font-medium text-sm dark:text-white">First Name:</label>
                <input type="text" id="first_name" className="w-[160px] h-[30px]  border border-gray-300  outline-0 text-sm rounded-md focus:border-white-50  p-1.5 dark:bg-gray-500 dark:border-gray-500 
                " placeholder="John" required />
            </div>

            <div className='w-full flex justify-between items-center mb-1'>
                <label for="first_name" style={{fontSize:'13px'}}  className="block text-gray-500 font-medium text-sm dark:text-white">Last Name:</label>
                <input type="text" id="first_name" className="w-[160px] h-[30px]  border border-gray-300  outline-0 text-sm rounded-md focus:border-white-50  p-1.5 dark:bg-gray-500 dark:border-gray-500 
                " placeholder="John" required />
            </div>

            <div className='w-full flex justify-between items-center mb-1'>
                <label for="first_name" style={{fontSize:'13px'}}  className="block text-gray-500 font-medium text-sm dark:text-white">Email:</label>
                <input type="text" id="first_name" className="w-[160px] h-[30px]  border border-gray-300  outline-0 text-sm rounded-md focus:border-white-50  p-1.5 dark:bg-gray-500 dark:border-gray-500 
                " placeholder="John" required />
            </div>
        </div>

        <div className='w-[30%] h-full ml-2 mt-2'>
            <div className='w-full flex justify-between items-center mb-1'>
                <label for="first_name" style={{fontSize:'13px'}}  className="block text-gray-500 font-medium text-sm dark:text-white">First Name:</label>
                <input type="text" id="first_name" className="w-[160px] h-[30px]  border border-gray-300  outline-0 text-sm rounded-md focus:border-white-50  p-1.5 dark:bg-gray-500 dark:border-gray-500 
                " placeholder="John" required />
            </div>

            <div className='w-full flex justify-between items-center mb-1'>
                <label for="first_name" style={{fontSize:'13px'}}  className="block text-gray-500 font-medium text-sm dark:text-white">Last Name:</label>
                <input type="text" id="first_name" className="w-[160px] h-[30px]  border border-gray-300  outline-0 text-sm rounded-md focus:border-white-50  p-1.5 dark:bg-gray-500 dark:border-gray-500 
                " placeholder="John" required />
            </div>

            <div className='w-full flex justify-between items-center mb-1'>
                <label for="first_name" style={{fontSize:'13px'}}  className="block text-gray-500 font-medium text-sm dark:text-white">Email:</label>
                <input type="text" id="first_name" className="w-[160px] h-[30px]  border border-gray-300  outline-0 text-sm rounded-md focus:border-white-50  p-1.5 dark:bg-gray-500 dark:border-gray-500 
                " placeholder="John" required />
            </div>
        </div>

        <div className='w-1/4 h-full flex justify-between items-center'>
            <div className='w-2/3'>
            </div>
            <div>
                <button type="button" class="text-white bg-[#0c611a] font-medium rounded-sm text-sm px-[20px] py-1 mb-1">Save Changes</button>
                <button type="button" class="text-white bg-[#232e3e] hover:bg-blue-800  font-medium rounded-sm text-sm px-2 py-1 mb-1">Change Password</button>
                <button type="button" class="text-white bg-[#ff3a3a] font-medium rounded-sm text-sm px-4 py-1 mb-1">Leave Family</button>
            </div>
        </div>
    </div>
  )
}

export default Profile