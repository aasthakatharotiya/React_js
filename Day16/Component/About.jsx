import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function About() {

  const navigate = useNavigate()
  const param = useParams()

  let name = "Aastha Katharotiya"

  const handleBtn = () => {
    navigate("/", { state: { name: "Student" }})
  }

  return (
    <div>
      <h1>About</h1>
      <h2>{param.id}</h2>
      <button onClick={handleBtn}>Go To Home</button>&nbsp;&nbsp;
      <Link to={`/Contact/${name}`}>Contact</Link>
    </div>
  )
}
