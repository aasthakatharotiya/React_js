import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Component/SignUp'
import SignIn from './Component/SignIn'
import DashBord from './Component/DashBord'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/dashbord' Component={DashBord}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
