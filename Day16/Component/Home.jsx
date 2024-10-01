import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  let location = useLocation()
  
  let data = "1234567890"
  let name = "Aastha Katharotiya"

  return (
    <div>
      <h1>Home</h1>
      <Link to={`/About/${data}`}>About</Link>&nbsp;&nbsp;
      <Link to={`/Contact/${name}`}>Contact</Link>
    </div>
  )
}
