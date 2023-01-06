import React,{useState} from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import { IoNotificationsOutline } from "react-icons/io5";
import { avatar } from '../assets';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar=()=>{

  const [isSuccess,setIsSuccess] = useState(false)
  const createDropdown=(obj,index)=>{
   if(Object.hasOwnProperty('subItem')){
      const arr = Object.values(obj.subItem)

      return(
      <div id={'dropDown'+index} className="z-10 position-absolute hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      {arr.map((item,index)=>{
        return(
          <li>
          <Link to="/" className="block px-4 py-2 hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white">{item}</Link>
        </li>
        )
      })}
      </ul>
    </div>)
   }

  }



  return(
    <div className='w-full flex bg-[#232e3e] justify-between flex-col items-center h-[100px]'>
      <nav className="w-full flex bg-[#232e3e] justify-between items-center h-[50px]">
        <div className='w-[40%] h-full flex justify-around items-center'>
          <div className='w-[15%] h-full flex justify-center items-center'>
              <GiHamburgerMenu color="orange" size={28} />
              <span className='text-white text-uppercase'>Logo</span>
          </div>
          <div className='w-[60%] h-full flex justify-around items-center'>
              {
                navLinks.map((item,index)=>{
                  return(
                    <Link to="/" type="button" className='text-gray-400'>{item.title}</Link>
                  )
                })
              }
          </div>
        </div>
        <div className='w-[10%] h-full flex justify-around items-center'>
            <IoNotificationsOutline color='white' />
            <img className="w-8 h-8 rounded-full" src={avatar} alt="Rounded_avatar" />
        </div>
      </nav>

      <div className='w-full h-[50px] bg-white flex justify-center items-center'>
          <div className='w-[98%] flex justify-between items-center'>
              <h2 className='text-lg font-bold'>My Account</h2>
              {
                !isSuccess ?
                <div onClick={()=> setIsSuccess(!isSuccess)} style={{backgroundColor:'#ff00006e'}} className="px-12 py-1 cursor-pointer flex h-full text-sm text-green-700 border border-green-300 rounded-lg">
                    <span className='font-medium text-[#ff0000c9]'>Warning Message Here</span>
                </div>
                :
                <div onClick={()=> setIsSuccess(!isSuccess)} className="bg-green-300 px-12 py-1 cursor-pointer flex h-full text-sm text-green-700 border border-green-300 rounded-lg">
                 <span className='font-medium text-green-500'>Success Message Here</span>
                </div>
              }
              <button type="button" class="text-white bg-[#232e3e] hover:bg-blue-800  font-medium rounded-sm text-sm px-3 py-1.5">view Button</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar