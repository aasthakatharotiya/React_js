import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Update({ data, setData }) {

  const navigate = useNavigate()

  const [edit_first_name, setEditFirstName] = useState("")
  const [edit_last_name, setEditLastName] = useState("")
  const [edit_email, setEditEmail] = useState("")
  const [edit_gr_id, setEditGRID] = useState("")
  const [edit_subject, setEditSubject] = useState("")
  const [edit_index, setEditIndex] = useState(null)

  const handleEdit = (id) => {
    let Edit_data = data.find((item) => item.id === id)
    if (Edit_data) {
      setEditFirstName(Edit_data.first_name)
      setEditLastName(Edit_data.last_name)
      setEditEmail(Edit_data.email)
      setEditGRID(Edit_data.gr_id)
      setEditSubject(Edit_data.subject)
      setEditIndex(id)
    }
  }

  const handleUpdate = () => {
    if (edit_index !== null) {
      const Update_Data = data.map((item) =>
        item.id === edit_index
          ? { ...item, first_name: edit_first_name, last_name: edit_last_name, email: edit_email, gr_id: edit_gr_id, subject: edit_subject }
          : item
      )

      setData(Update_Data)

      localStorage.setItem("Data", JSON.stringify(Update_Data))

      setEditIndex(null)
      setEditFirstName("")
      setEditLastName("")
      setEditEmail("")
      setEditGRID("")
      setEditSubject("")

      navigate("/")
    }
  }

  return (
    <div className='update_body'>
      <div className='form_div'>
        <div className='update_body_css'>
          <h1 style={{marginTop: '0px'}}>Update Data</h1>

          {edit_index !== null && (
            <form action="" id='form_disp'>
              <div className="main">
                <div className="First_Name">
                  <h3>First Name</h3>
                  <input required value={edit_first_name} type="text" placeholder='Enter Your First Name...' onChange={(e) => setEditFirstName(e.target.value)} />
                </div>

                <div className="Last_Name">
                  <h3>Last Name</h3>
                  <input required value={edit_last_name} type="text" placeholder='Enter Your Last Name...' onChange={(e) => setEditLastName(e.target.value)} />
                </div>
              </div>

              <div className="diff">
                <h3>Email</h3>
                <input required value={edit_email} type="email" placeholder='example@gmail.com' onChange={(e) => setEditEmail(e.target.value)} />
              </div>

              <div className="main">
                <div className="gr_id">
                  <h3>GR ID</h3>
                  <input required value={edit_gr_id} type="number" maxLength={4} placeholder='Enter Your GR ID' onChange={(e) => setEditGRID(e.target.value)} />
                </div>

                <div className="subject">
                  <h3>Subject</h3>
                  <select required value={edit_subject} name="" id="" onChange={(e) => setEditSubject(e.target.value)}>
                    <option value="">Select Your Favorite Subject</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JQuery">JQuery</option>
                    <option value="Bootstrap">Bootstrap</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="C Language">C Language</option>
                    <option value="DSA">Data Structures and Algorithms</option>
                    <option value="React JS">React JS</option>
                    <option value="Node JS">Node JS</option>
                    <option value="Mongo DB">Mongo DB</option>
                  </select>
                </div>
              </div>

              <br />
              <center>
                <button className='up_btn' onClick={handleUpdate}>Update Data</button>
              </center>
            </form>
          )}

          <br />

          <table>
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
                      <button className='edit_btn' onClick={() => handleEdit(e.id)}>Edit Data</button>
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
