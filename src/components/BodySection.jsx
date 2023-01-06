import React,{useState} from 'react'
import { Profile,BankAccount,Activities,BillingAddress,Family,ReceivedMessage,SentMessages } from './index'

const BodySection = () => {

    const [isSent,setIsSent] = useState(true)
    const tabActive = {
         width:'auto',
         height:'100%',
         backgroundColor:'orange',
         color:'white' 
    }
 
  return (
    <div className='bg-white w-full h-full flex justify-center items-center'>
        <div className='w-[98%] h-full flex justify-around items-center'>
            {/* Body left section */}
            <div className='w-[75%] bg-white mr-2 h-full flex justify-between items-center flex-col'>
                <div className='w-full bg-gray-100  h-[23%] flex'>
                    <Profile />
                </div>

                <div className='w-full h-[75%] flex justify-center items-center'>
                    <div className='w-2/3 h-full flex flex-col justify-between items-center'>
                        <div className='w-full bg-gray-100 h-[30%] flex'>
                            <BankAccount />
                        </div>
                        <div className='w-full bg-gray-100 h-[65%] flex'>
                            <BillingAddress />
                        </div>
                    </div>
                    <div className='w-[35%] h-full ml-2 bg-gray-100 flex'>
                        <Activities />
                    </div>
                </div> 
            </div>

            {/* Body right section */}
            <div className='w-[25%] ml-2 h-full flex justify-around items-center flex-col'>
                <div className='w-full h-1/2 mb-2 bg-gray-100 flex'>
                    <Family />
                </div>
                <div className='w-full h-1/2 mb-2 bg-gray-100 flex flex-col'>
                    <div className='w-full h-10 mb-2 mr-1 px-2 flex justify-between items-center'>
                        <span className='text-md font-bold' style={{fontSize:'13px'}}>Invitations</span>
                        <div className='w-[150px] mt-1 h-[30px] bg-gray-200 rounded-full flex items-center justify-around'>
                            <span style={isSent ? tabActive : null} onClick={()=>setIsSent(!isSent)} className='cursor-pointer rounded-full px-3 mr-1 text-xs py-2 font-medium text-gray-800'> Sent(15) </span>
                            <span style={!isSent ? tabActive : null} onClick={()=>setIsSent(!isSent)} className='cursor-pointer rounded-full px-2 text-xs py-2 font-medium text-gray-800'> Received(5) </span>
                        </div>
                    </div>

                    {
                        isSent ? <SentMessages /> : <ReceivedMessage />
                    }
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default BodySection