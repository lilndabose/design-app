import React from 'react'
import { tick,cross } from '../assets'
import { received } from '../constants'

function ReceivedMessage() {
  return (
    <div  className='w-full h-full'>
        {
            received.map((item,index)=>{
                return(
                    <div key={index}  className='w-[96%] h-[40px] mb-1 flex justify-between items-center mx-2 bg-[#DEE8FF] rounded-md'>
                        <div className='w-[80%] h-full flex justify-around items-center'>
                            <img className="w-[15%] h-[35px] rounded-full" src={item.image} alt="Rounded_avatar" />
                            <span className='w-[80%] text-xs pl-1 font-medium text-black'>
                                <span className='text-orange-500 text-xm font-medium'>{item.name}</span>
                                                &nbsp;{item.text}.
                            </span>
                        </div>

                        <div className='w-[50px] h-full flex justify-around items-center mr-1'>
                            <button type="button" class="text-black bg-[#0C611A] font-medium rounded-sm p-2">
                                <img src={tick} className="h-2 w-3" />
                            </button>

                            <button type="button" class="text-black bg-[#FF3A3A] font-medium rounded-sm ml-1 p-2">
                                <img src={cross} className="h-2 w-3" />
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ReceivedMessage