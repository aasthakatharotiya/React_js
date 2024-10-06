import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({ data, setData }) {

  const navigate = useNavigate()
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [gr_id, setGRID] = useState("")
  const [subject, setSubject] = useState("")

  const handleSubmit = () => {

    // e.preventDefault()
    // if(!first_name || !last_name || !email || !gr_id || !subject){
    //   alert("Please Fill Out All Fields...")
    // }

    let obj = { id: data.length + 1, first_name: first_name, last_name: last_name, email: email, gr_id: gr_id, subject: subject }
    setData([...data, obj])

    localStorage.setItem("Data", JSON.stringify([...data, obj]))
    navigate("/")
  }

  return (
    <div className='create_body'>

      <div className='form_div'>
        <div className='create_body_css'>
          <h1 style={{marginTop: '0px'}}>Create Data</h1>

          <form action="">
            <div className="main">
              <div className="First_Name">
                <h3>First Name</h3>
                <input required type="text" placeholder='Enter Your First Name...' onChange={(e) => setFirstName(e.target.value)} />
              </div>

              <div className="Last_Name">
                <h3>Last Name</h3>
                <input required type="text" placeholder='Enter Your Last Name...' onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className="diff">
              <h3>Email</h3>
              <input required type="email" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="main">
              <div className="gr_id">
                <h3>GR ID</h3>
                <input required type="number" maxLength={4} placeholder='Enter Your GR ID' onChange={(e) => setGRID(e.target.value)} />
              </div>

              <div className="subject">
                <h3>Subject</h3>
                <select required name="" id="" onChange={(e) => setSubject(e.target.value)}>
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
              <button onClick={handleSubmit} type='submit' className='add_btn'>Add Data</button>
            </center>
          </form>
        </div>
      </div>
    </div>
  )
}
