import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontpage from '../pages/Frontpage/Frontpage'
import Kategoripage from '../pages/Kategoripage/Kategoripage'

function Approuter() {
  return (
    <Routes>
        <Route index element={<Frontpage/>}></Route> 
        <Route path={"/kategori/:id"} element={<Kategoripage/>}></Route>
    </Routes>
  )
}

export default Approuter