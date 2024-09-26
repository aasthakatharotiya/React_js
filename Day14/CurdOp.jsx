import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CurdOp() {

  let [name, setName] = useState("")
  let [subject, setSubject] = useState("")
  let [city, setCity] = useState("")

  const [record, setRecord] = useState(null)
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() =>{
    let Data = JSON.parse(localStorage.getItem("Student")) || []
    setRecord(Data)
  }, [])

  const handleAdd = () => {
    console.log(name, subject, city)

    let user = {id : Date.now(), name, subject, city}
    
    let OldRecord = JSON.parse(localStorage.getItem("Student")) || []
    OldRecord.push(user)
    setRecord(OldRecord)
    localStorage.setItem("Student", JSON.stringify(OldRecord))

    setName("")
    setSubject("")
    setCity("")
  }

  const handleDelete = (id) => {
    let DeleteData = record.filter((item) => item.id != id)
    setRecord(DeleteData)
    localStorage.setItem("Student", JSON.stringify(DeleteData))
  }

  const handleEdit = (id) => {
    let SingleData = record.find((item) => item.id == id)
    setName(SingleData.name)
    setSubject(SingleData.subject)
    setCity(SingleData.city)
    setEditIndex(id)
  }

  return (
    <div>
        <h1>Data Store In Local Storage</h1>

        <div className='input_div'>
            <input type="text" value={name} placeholder='Enter Student Name...' onChange={(e) => setName(e.target.value)} />
            <input type="text" value={subject} placeholder='Enter Student Subject...' onChange={(e) => setSubject(e.target.value)} />
            <input type="text" value={city} placeholder='Enter Your City...' onChange={(e) => setCity(e.target.value)} />
        </div>

        <br />
        <button onClick={() => handleAdd()}>{editIndex ? "Update Data" : "Add Data"}</button>
        <br />
        <br />
        <table border='1' width="570px">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Subject</th>
              <th>City</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              record 
              ? record.map((e,i) => {
                  return <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.subject}</td>
                    <td>{e.city}</td>
                    <td><button onClick={() => handleEdit(e.id)}>Edit</button></td>
                    <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                  </tr>
                })
              : ""
            }
          </tbody>
        </table>
    </div>
  )
}
