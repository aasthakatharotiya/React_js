import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete({ data, setData }) {

  const navigate = useNavigate()
  // const [id, setId] = useState("")

  const handleDelete = (id) => {
    let Delete_Item = data.filter((item) => item.id != id)

    const Update_Delete_Data = Delete_Item.map((item, index) => ({
      ...item,
      id: index + 1
    }))

    setData(Update_Delete_Data)

    localStorage.setItem("Data", JSON.stringify(Update_Delete_Data))
    navigate("/")
  }

  return (
    <div className='delete_body'>
      <div className='main_div_css'>
        <div className='delete_body_css'>
          <h1 style={{marginTop: '0px'}}>Delete Data</h1>

          <table width="700px">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>GR ID</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                data &&
                data.map((e, i) => {
                  return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.first_name} {e.last_name}</td>
                    <td>{e.email}</td>
                    <td>{e.gr_id}</td>
                    <td>{e.subject}</td>
                    <td style={{ borderRight: '1px solid' }}>
                      <button className='del_btn' onClick={() => handleDelete(e.id)}>Delete Data</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>

          <br />
        </div>
      </div>
    </div>
  )
}
