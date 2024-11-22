import React from 'react'
import Login from './Component/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBord from './Component/DashBord'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/DashBord' Component={DashBord}></Route>
      </Routes>
    </BrowserRouter>
  )
}
