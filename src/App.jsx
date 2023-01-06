import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Main } from './components/index'

function App() {

  return (
   <>
      <Routes>
          <Route path="/" exact element={<Main />} />
      </Routes>
   </>
  )
}

export default App
