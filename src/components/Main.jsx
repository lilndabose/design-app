import React from 'react'
import { Navbar,BodySection } from './index'

const Main = () => {
  return (
    <div style={{ display:'flex',flexDirection:'column',width: '100%',height:'100vh'}}>
      <div className='bg-white w-full overflow-hidden'>
        <Navbar />
    </div>
    <div className='bg-white w-full h-[85vh] border-1 border-black'>
      <BodySection />
    </div>
   </div>
  )
}

export default Main