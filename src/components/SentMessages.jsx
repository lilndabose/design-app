import React from 'react'
import { sent } from '../constants'

function SentMessages() {
  return (
    <div className='w-full h-full'>
        {
            sent.map((item,index)=>{
                return(
                    <div key={index}  className='w-[96%] h-[40px] mb-1 flex justify-between items-center mx-2 bg-[#DEE8FF] rounded-md'>
                        <div className='w-[90%] h-full flex justify-around items-center'>
                            <span className='w-full text-xs ml-2 pl-1 font-medium text-black'>
                                <span className='text-orange-500 text-xm font-medium'>{item.name}</span>
                                                &nbsp;{item.text}.
                            </span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SentMessages