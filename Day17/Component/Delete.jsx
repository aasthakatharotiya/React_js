import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete({data, setData}) {

  const navigate = useNavigate()
  const [id, setId] = useState("")
  const handleDelete = () => {
    let Delete_Item = data.filter((item) => item.id != id)
    setData(Delete_Item)
    navigate("/")
  }

  return (
    <div>
      <h1>Delete Data</h1>
      <input type="text" placeholder='Enter Your Id...' onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
