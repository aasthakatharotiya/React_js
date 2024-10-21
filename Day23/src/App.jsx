import React from 'react'
import APIWithFetch from './Component/APIWithFetch'
import APIWithAxios from './Component/APIWithAxios'
import APIWithCurd from './Component/APIWithCurd'

export default function App() {
  return (
    <div>
      {/* <APIWithFetch/> */}
      {/* <APIWithAxios/> */}
      <APIWithCurd/>
    </div>
  )
}
