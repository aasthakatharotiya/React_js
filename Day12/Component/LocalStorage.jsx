import React from 'react'

export default function LocalStorage() {

    localStorage.setItem("name1", "abc")
    localStorage.setItem("name2", "xyz")

    let Data = localStorage.getItem("name1", "name2")
    console.log(Data)

    localStorage.removeItem("name2")

    let obj = {
        Name : "Aastha",
        Subject : "React_JS",
        age : "18"
    }

    localStorage.setItem("myObj", JSON.stringify(obj))

    let ObjData = JSON.parse(localStorage.getItem("myObj"))
    console.log(ObjData)

  return (
    <div>
        <h1>LocalStorage</h1>
    </div>
  )
}