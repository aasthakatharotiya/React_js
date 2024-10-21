import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function APIWithCurd() {

    const [record, setRecord] = useState("")
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [views, setViews] = useState("")

    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        let response = await axios.get("http://localhost:5000/posts")
        console.log(response.data)
        setRecord(response.data)
    }

    const addData = async () => {
        if (!id || !title || !views) {
            alert("Please fill out all fields before adding data")
            return
        }

        if (editIndex) {
            let updateResponse = await axios.put(`http://localhost:5000/posts/${editIndex}`, { "id": id, "title": title, "views": views })
            console.log(updateResponse)
            setRecord(record.map(item => item.id === editIndex ? updateResponse.data : item))
        }
        else {
            let addResponse = await axios.post("http://localhost:5000/posts", { "id": id, "title": title, "views": views })
            console.log(addResponse)
            setRecord([...record, addResponse.data])
        }
        setId("")
        setTitle("")
        setViews("")
        setEditIndex(null)

        // let addResponse = await axios.post("http://localhost:5000/posts", { "id": id, "title": title, "views": views })
        // console.log(addResponse)
        // setId("")
        // setTitle("")
        // setViews("")
        // setRecord([...record, addResponse.data])
    }


    const deleteData = async (id) => {
        let deleteResponse = await axios.delete(`http://localhost:5000/posts/${id}`)
        console.log(id)
        setRecord(record.filter(item => item.id !== id))
        // setRecord([...record, deleteResponse.data])
    }

    const editData = async (id) => {
        let editResponse = record.find((item) => item.id == id)
        setId(editResponse.id)
        setTitle(editResponse.title)
        setViews(editResponse.views)
        setEditIndex(id)
    }

    return (
        <div>
            <h1>APIWithCurd</h1>
            <h3>
                Enter Id : &nbsp;
                <input type="text" value={id} placeholder='Enter Id...' onChange={(e) => setId(e.target.value)} />
            </h3>
            <h3>
                Enter Title : &nbsp;
                <input type="text" value={title} placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />
            </h3>
            <h3>
                Enter Views : &nbsp;
                <input type="text" value={views} placeholder='Enter Views...' onChange={(e) => setViews(e.target.value)} />
            </h3>
            <button onClick={addData}>{editIndex ? "Update Data" : "Add Data"}</button>
            <br /><br />
            <div className="flex_div">
                {
                    record &&
                    record.map((e, i) => {
                        return (<div key={i} className='pr_div'>
                            <h2>{e.id}</h2>
                            <h2>{e.title}</h2>
                            <h2>{e.views}</h2>
                            <button onClick={() => deleteData(e.id)}>Delete</button>
                            <button onClick={() => editData(e.id)}>Edit</button>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
