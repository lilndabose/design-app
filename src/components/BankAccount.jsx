import React from 'react'
import {mastercard} from '../assets/index'

const BankAccount=()=>{

  return(
    <div className='w-full h-full'>
        <span className='text-md font-bold m-4 py-2 text-[#232e3e]' style={{fontSize:'13px'}}>Bank Account</span>

        <div className='w-2/3 flex justify-around items-center ml-5'>
            <div class="w-1/2 mr-2 h-[50px] max-w-sm bg-white border-white-200 rounded-sm flex justify-around items-center">
                    <div className=' flex justify-center items-center'>
                        <img class="w-15 h-5 " src={mastercard} alt="profile_image" />
                    </div>
                    <div>
                        <span className='font-bold text-[#232e3e]' style={{fontSize:'14px'}}>**** **** **** 5967</span>
                        <span style={{fontSize:'9px'}} className="center text-gray-400 w-full flex items-start">
                            Expires 09/27
                        </span>
                    </div>
            </div>

            <div class="w-1/2 h-[50px] max-w-sm bg-white border-white-200 rounded-sm flex justify-around items-center">
                    <div className=' flex justify-center items-center'>
                        <img class="w-15 h-5 " src={mastercard} alt="profile_image" />
                    </div>
                    <div>
                        <span className='font-bold text-[#232e3e]' style={{fontSize:'14px'}}>**** **** **** 5967</span>
                        <span style={{fontSize:'9px'}} className="center text-gray-400 w-full flex items-start">
                            Expires 09/27
                        </span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BankAccount