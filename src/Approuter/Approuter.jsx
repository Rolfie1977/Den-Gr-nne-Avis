import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontpage from '../pages/Frontpage/Frontpage'

function Approuter() {
  return (
    <Routes>
        <Route index element={<Frontpage/>}></Route> 
    </Routes>
  )
}

export default Approuter