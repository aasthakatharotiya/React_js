import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

export default function Contact() {

  let data = "1234567890"

  const param = useParams()

  const navigate = useNavigate()
  const handleBtn = () => {
    navigate("/")
  }

  return (
    <div>
      <h1>Contact</h1>
      <h2>{param.name}</h2>
      {/* <h2>{location.state.name}</h2> */}
      <button onClick={handleBtn}>Go To Home</button>&nbsp;&nbsp;
      <Link to={`/About/${data}`}>About</Link>
    </div>
  )
}
