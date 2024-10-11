import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData } from '../Feature/TodoSlice'

export default function ReduxCounter() {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")

    const count = useSelector((state) => {
        return state.todoKey
    })

    const dispatch = useDispatch()

    const addRecord = () => {
        dispatch(addData({id: Date.now(), name, subject}))
        setName("")
        setSubject("")
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }

    return (
        <div>
            <h1>ReduxCounter</h1>
            <input value={name} type="text" placeholder='Enter Name...' onChange={(e) => setName(e.target.value)} />
            <input value={subject} type="text" placeholder='Enter Subject...' onChange={(e) => setSubject(e.target.value)} />
            <br /><br />
            <button onClick={addRecord}>Add Data</button>

            {
                count ?
                    count.student.map((e,i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                            <button>Edit</button>
                            <button onClick={() => deleteRecord(e.id)}>Delete</button>
                        </ul>
                    })
                    : <p>No Data</p>
            }
        </div>
    )
}
