import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Curd_DashBord from './Component/Curd_DashBord'
import SignUp from './Component/SignUp'
import SignIn from './Component/SignIn'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/signin' Component={SignIn}></Route>
          <Route path='/CURD_dashbord' Component={Curd_DashBord}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
