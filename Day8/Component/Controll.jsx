import React, { useState } from 'react'

export default function Controll() {

    const [name, setName] = useState("")
    const handleChange = (e) => {
        console.log(e.target.value)
    }

  return (
    <div>
        <h1>Controllrd Components</h1>
        <input type="text" placeholder='Enter Your Name...' onChange={(e) => handleChange(e)} />
    </div>
  )
}
