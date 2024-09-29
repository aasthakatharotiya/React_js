import React, { useState, useEffect } from 'react'

export default function Task() {

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [task, setTask] = useState("")
    const [category, setCategory] = useState("")
    const [status, setStatus] = useState("")

    const [record, setRecord] = useState(null)
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let Data = JSON.parse(localStorage.getItem("Task")) || []
        setRecord(Data)
    }, [])

    const handleAdd = () => {

        if(!first_name || !last_name || !task || !category) {
            alert("Please Fill Out all Fields Before Adding a Task.");
            return; // Exit the function if any field is empty
        }

        console.log(first_name, last_name, task, category, status)

        let Task_Arr = {id : Date.now(), first_name, last_name, task, category, status : "Pending"}
        
        let OldRecord = JSON.parse(localStorage.getItem("Task")) || []

        if(editIndex){
            let SingleData = OldRecord.find((item) => item.id == editIndex)
            if(SingleData){
                SingleData.first_name = first_name
                SingleData.last_name = last_name
                SingleData.category = category 
                SingleData.task = task
                setEditIndex(null)
            }
        }
        else{
            OldRecord.push(Task_Arr)   
        }

        setRecord(OldRecord)
        localStorage.setItem("Task", JSON.stringify(OldRecord))

        setFirstName("")
        setLastName("")
        setCategory("")
        setTask("")
        // setStatus("")
    }

    const handleEdit = (id) => {
        let SingleData = record.find((item) => item.id == id)
        if(SingleData){
            setFirstName(SingleData.first_name)
            setLastName(SingleData.last_name)
            setCategory(SingleData.category)
            setTask(SingleData.task)
            setEditIndex(id)
        }
    }

    const handleDelete = (id) => {
        let DeleteData = record.filter((item) => item.id != id)
        setRecord(DeleteData)
        localStorage.setItem("Task", JSON.stringify(DeleteData))
    }

    // const handleComplete = (id) => {
    //     let SingleData = record.find((item) => item.id == id)
        
    //     if (SingleData) {
    //         SingleData.status = "Completed";
    //     }

    //     localStorage.setItem("Task", JSON.stringify(record))
    //     setRecord([...record])
    //     // setRecord(record.slice())
    // }


    const handleComplete = (id) => {
        let updatedRecord = record.map((item) => {
            if (item.id === id) {
                item.status = item.status === "Pending" ? "Completed" : "Pending"
            }
            return item
        })

        setRecord(updatedRecord)
        localStorage.setItem("Task", JSON.stringify(updatedRecord))
    }

    return (
        <div>
            <h1 style={{color: 'black'}}>---------------- Task Mnager ----------------</h1>
            <div>
                <div className='form_div'>
                    <form action="">
                        <div className="name_main">
                            <div className="first_name">
                                <h3>First Name</h3>
                                <input required value={first_name} type="text" placeholder='First Name...' onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="last_name">
                                <h3>Last Name</h3>
                                <input required value={last_name} type="text" placeholder='Last Name...' onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="select_main">
                            <div className="category">
                                <h3>Priority</h3>
                                <select required value={category} name="" id="" onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select Appropriate Option</option>
                                    <option value="High">🔴 High</option>
                                    <option value="Medium">🟡 Medium</option>
                                    <option value="Low">🟢 Low</option>
                                </select>
                            </div>
                            {/* <br /> */}
                            <div className="task">
                                <h3>Task</h3>
                                <select required value={task} name="" id="" onChange={(e) => setTask(e.target.value)} >
                                    <option value="">Select Your Task</option>
                                    <option value="User Training">User Training</option>
                                    <option value="Team Meeting">Team Meeting</option>
                                    <option value="Code Review">Code Review</option>
                                    <option value="Design Mockups">Design Mockups</option>
                                    <option value="Database Backup">Database Backup</option>
                                    <option value="Update Software">Update Software</option>
                                    <option value="Security Audit">Security Audit</option>
                                    <option value="Feedback Review">Feedback Review</option>
                                    <option value="Market Research">Market Research</option>
                                    <option value="Data Analysis">Data Analysis</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <center>
                            <button onClick={() => handleAdd()}>{editIndex ? "Update Data" : "Add Data"}</button>
                        </center>
                    </form>
                </div>
                <br />
                

                <div className="task_manager" style={{height : record && record.length > 0 ? '270px' : 'auto'}}>
                    {
                        record
                        ? record.map((e,i) => {
                            let BgColor
                            let BgOpacity

                            if(e.category === "High"){
                                BgColor = "rgb(232,50,33)"
                            }
                            else if(e.category === "Medium"){
                                BgColor = "rgb(255,147,0)"
                            }
                            else if(e.category === "Low"){
                                BgColor = "green"
                            }
                            else{
                                BgColor = "none"
                            }

                            BgOpacity = e.status === "Completed" ? 0.5 : 1

                            return <div className="task_div" key={i} style={{backgroundColor : BgColor, opacity : BgOpacity}} >
                                <div className='left_div'>
                                    {/* <div className="rotate"> */}
                                        <h5>{e.status}</h5>
                                    {/* </div> */}
                                </div>
                                <div className="right_div">
                                    <h1>{e.task}</h1>
                                    <h3>{e.first_name}&nbsp;&nbsp;{e.last_name}</h3>
                                    <span>{e.category}</span>
                                    <br /><br />
                                    <button className='edit_btn' onClick={() => handleEdit(e.id)}>Edit</button>
                                    <button className='delete_btn' onClick={() => handleDelete(e.id)}>Delete</button>
                                    <button className='comp_btn' onClick={() => handleComplete(e.id)}>{e.status === "Pending" ? "Complete" : "Pending"}</button>
                                </div>
                            </div>
                        })
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}