import React, { useEffect, useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Create from './Component/Create'
import Delete from './Component/Delete'
import Update from './Component/Update'
import Home from './Component/Home'

export default function App() {

  // const [data, setData] = useState(
  //   [
  //     { id: 1, name: "Aastha", subject: "React_JS" },
  //     { id: 2, name: "Aashi", subject: "Node_JS" }
  //   ]
  // )

  const [data, setData] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem('Data')
    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='/Create' element={<Create data={data} setData={setData}/>}></Route>
          <Route path='/Delete' element={<Delete data={data} setData={setData}/>}></Route>
          <Route path='/Update' element={<Update data={data} setData={setData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
