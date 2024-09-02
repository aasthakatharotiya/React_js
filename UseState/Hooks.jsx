import React, { useState } from 'react'

export default function Hooks() {

    const [count , SetCount] = useState(0)
    const [name , SetName] = useState("komal")
    const [arr , SetArr] = useState([1,2,3,"Naksh",4,5]);
    const [obj , SetObj] = useState({name : "Bhakti" , subject : "react"})
    const [arrObj , SetArrObj] = useState([{name : "Mansi" , subject : "react"},{name : "Naksh" , subject : "Node"}])

    const increase = () => {
        SetCount(count+1)
    }
    const decrease = () => {
        SetCount(count-1)
    }
  return (
    <div className='main'>
        <center>
             <h1>UseState</h1>
             <h3>{count}</h3>
             <button onClick={increase}>Increase</button>
             <button onClick={decrease}>Decrease</button>
             <h3>{name}</h3>   
            <br />
            {
                arr.map((e , i) => {
                    return <p key={i}>{e}</p>
                })
            }

            <br />
            <p>{obj.name}</p>
            <p>{obj.subject}</p>
            
        </center>
        <br />
        {
                arrObj.map((e,i) => {
                    return <ul key={i}> <br />
                        <li>{e.name}</li> 
                        <li>{e.subject}</li>
                    </ul>
                })
             } 
    </div>
  )
}
