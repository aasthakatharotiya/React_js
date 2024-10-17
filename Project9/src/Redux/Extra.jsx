import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../Feature/TodoSlice'

export default function ReduxCounter() {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [grid, setGRID] = useState("")
    const [subject, setSubject] = useState("")

    const [priority, setPriority] = useState("")
    const [salary, setSalary] = useState("")
    const [experience, setExperience] = useState("")
    const [job, setJob] = useState("")

    const [editindex, setEditIndex] = useState(null)

    const count = useSelector((state) => {
        return state.todoKey
    })

    const dispatch = useDispatch()

    const addRecord = (event) => {
        event.preventDefault()

        if (!firstname || !lastname || !email || !grid || !subject || !priority || !salary || !experience || !job) {
            alert("Please fill out all fields before submitting.")
            return
        }

        if (editindex == null) {
            dispatch(addData({ id: Date.now(), firstname, lastname, email, grid, subject, priority, salary, experience, job }))
        }
        else {
            dispatch(updateData({ id: editindex, firstname, lastname, email, grid, subject, priority, salary, experience, job }))
            setEditIndex(null)
        }
        setFirstName("")
        setLastName("")
        setEmail("")
        setGRID("")
        setSubject("")

        setPriority("")
        setSalary("")
        setExperience("")
        setJob("")
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }

    const editRecord = (id) => {
        let singleData = count.student.find((item) => item.id == id)
        setFirstName(singleData.firstname)
        setLastName(singleData.lastname)
        setEmail(singleData.email)
        setGRID(singleData.grid)
        setSubject(singleData.subject)

        setPriority(singleData.priority)
        setSalary(singleData.salary)
        setExperience(singleData.experience)
        setJob(singleData.job)
        setEditIndex(id)

        let form_data = document.getElementById("form_data")
        form_data.style.visibility = "hidden"
        form_data.style.width = "0%"
        form_data.style.transition = "1s"
    }

    useEffect(() => {
        let form_data = document.getElementById("form_data")

        let dataDisplayBtn = document.getElementById("display_btn")
        dataDisplayBtn.addEventListener("click", function () {

            form_data.style.visibility = "visible"
            form_data.style.width = "46%"
            form_data.style.transition = "1s"
        })

        let data_disp = document.getElementById("data_disp")
        data_disp.addEventListener("click", function () {

            form_data.style.visibility = "visible"
            form_data.style.width = "46%"
            form_data.style.transition = "1s"

            setTimeout(handleGraphCSS, 100)
        })

        let cross = document.getElementById("cross")
        cross.addEventListener("click", function () {

            form_data.style.visibility = "hidden"
            form_data.style.width = "0%"
            form_data.style.transition = "1s"
        })

        let edit_cross = document.getElementById("edit_cross")
        edit_cross.addEventListener("click", function () {

            form_data.style.visibility = "hidden"
            form_data.style.width = "0%"
            form_data.style.transition = "1s"

            setTimeout(handleCrossGraph, 100)
        })

    }, [])

    const handleGraphCSS = () => {
        let priority_sets = document.querySelectorAll(".priority_set")
        let salary_sets = document.querySelectorAll(".salary_set")
        let experince_sets = document.querySelectorAll(".experince_set")
        let job_sets = document.querySelectorAll(".job_set")

        priority_sets.forEach((element) => {
            element.style.height = "100%"
            element.style.transition = "4s"
        })

        salary_sets.forEach((element) => {
            element.style.height = "100%"
            element.style.transition = "4s"
        })

        experince_sets.forEach((element) => {
            element.style.height = "100%"
            element.style.transition = "4s"
        })

        job_sets.forEach((element) => {
            element.style.height = "100%"
            element.style.transition = "4s"
        })
    }

    const handleCrossGraph = () => {
        let priority_sets = document.querySelectorAll(".priority_set")
        let salary_sets = document.querySelectorAll(".salary_set")
        let experince_sets = document.querySelectorAll(".experince_set")
        let job_sets = document.querySelectorAll(".job_set")

        priority_sets.forEach((element) => {
            element.style.height = "0%"
            element.style.transition = "4s"
        })

        salary_sets.forEach((element) => {
            element.style.height = "0%"
            element.style.transition = "4s"
        })

        experince_sets.forEach((element) => {
            element.style.height = "0%"
            element.style.transition = "4s"
        })

        job_sets.forEach((element) => {
            element.style.height = "0%"
            element.style.transition = "4s"
        })
    }


    return (
        <div className='body_main_div'>

            <div className="bg_flex">

                <div className="form_main">
                    <form action="">
                        <center>
                            <h1>Login In</h1>
                        </center>

                        <div className='main'>
                            <div className="first_name">
                                <h3>First Name</h3>
                                <input required value={firstname} type="text" placeholder='First Name...' onChange={(e) => setFirstName(e.target.value)} />
                            </div>

                            <div className="last_name">
                                <h3>Last Name</h3>
                                <input required value={lastname} type="text" placeholder='Last Name...' onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>

                        <div className="diff_main">
                            <h3>Email</h3>
                            <input required value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="main">
                            <div className="gr_id">
                                <h3>GR ID</h3>
                                <input required value={grid} type="number" onChange={(e) => setGRID(e.target.value)} />
                            </div>

                            <div className="subject">
                                <h3>Task</h3>
                                <select required value={subject} name="" id="" onChange={(e) => setSubject(e.target.value)}>
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

                        <div className="main">
                            <div className="priority" >
                                <h3>Priority</h3>
                                <select required value={priority} name="" id="" onChange={(e) => setPriority(e.target.value)}>
                                    <option value="">Select Priority</option>
                                    <option value="High">High Priority</option>
                                    <option value="Medium">Medium Priority</option>
                                    <option value="Low">Low Priority</option>
                                </select>
                            </div>

                            <div className="salary">
                                <h3>Salary</h3>
                                <select required value={salary} name="" id="" onChange={(e) => setSalary(e.target.value)}>
                                    <option value="">Select Salary</option>
                                    <option value="10-20">10-20</option>
                                    <option value="20-30">20-30</option>
                                    <option value="30-40">30-40</option>
                                    <option value="40-50">40-50</option>
                                    <option value="50-60">50-60</option>
                                    <option value="60-70">60-70</option>
                                    <option value="70-80">70-80</option>
                                    <option value="80-90">80-90</option>
                                    <option value="90 Below">90 Below</option>
                                </select>
                            </div>
                        </div>

                        <div className="main">
                            <div className="experience">
                                <h3>Experience</h3>
                                <select required value={experience} name="" id="" onChange={(e) => setExperience(e.target.value)}>
                                    <option value="">Your Experience</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Training">Training</option>
                                    <option value="Other Place Work">Other Place Work</option>
                                </select>
                            </div>

                            <div className="job">
                                <h3>Job Timing</h3>
                                <select required value={job} name="" id="" onChange={(e) => setJob(e.target.value)}>
                                    <option value="">Select Job Timing</option>
                                    <option value="Full-Time">Full-Time Job</option>
                                    <option value="Part-Time">Part-Time Job</option>
                                </select>
                            </div>
                        </div>

                        <center>
                            <button id='data_disp' onClick={addRecord}>
                                {editindex ? "Update Data" : "Add Data"}
                            </button>
                        </center>
                    </form>
                </div>

                <div className="bg_img">

                </div>
            </div>

            <div id='data_disp' className='data_disp'>
                <button id="display_btn" onClick={handleGraphCSS}>
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
            </div>

            <div id="form_data" className='form_data'>
                <div id='form_css' className="form_css">
                    <div className="cross_div">
                        <button id='cross' onClick={handleCrossGraph}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <center>
                    <div className="data">
                        {
                            count ?
                                count.student.map((e, i) => {
                                    return (
                                        <div className='data_flex_css'>

                                            <div className='data_div' key={i}>
                                                <h3>{e.firstname} {e.lastname}</h3>
                                                <h3>{e.email}</h3>
                                                <h3><span style={{color: 'rgb(255, 0, 106)'}}>Task : </span> {e.subject}</h3>
                                                <h3><span style={{color: 'rgb(255, 0, 106)'}}>GR ID :</span> {e.grid}</h3>

                                                {/* <h3>{e.priority}</h3>
                                                <h3>{e.salary}</h3>
                                                <h3>{e.experience}</h3>
                                                <h3>{e.job}</h3> */}

                                                <div className='btn_flex'>
                                                    <button id='edit_cross' className='edit_btn' onClick={() => { editRecord(e.id);}}>Edit</button>
                                                    <button className='delete_btn' onClick={() => deleteRecord(e.id)}>Delete</button>
                                                </div>
                                            </div>

                                            <div className='data_graph'>
                                                <div className="priority_graph">
                                                    <div className="priority_height">
                                                        <div className="pr_graph_priority"
                                                            style={{ height: e.priority === "High" ? "99%" : e.priority === "Medium" ? "50%" : "0%" }}>
                                                            <div id='priority_set' className="priority_set"></div>
                                                        </div>
                                                    </div>
                                                    <div className="priority_title">
                                                        Priority
                                                    </div>
                                                </div>

                                                <div className="salary_graph">
                                                    <div className="salary_height">
                                                        <div className="pr_graph_salary"
                                                            style={{
                                                                height: e.salary === "10-20" ? "20%" : e.salary === "20-30" ? "30%" : e.salary === "30-40" ? "40%" :
                                                                    e.salary === "40-50" ? "50%" : e.salary === "50-60" ? "60%" : e.salary === "60-70" ? "70%" :
                                                                        e.salary === "70-80" ? "80%" : e.salary === "80-90" ? "90%" : e.salary === "90 Below" ? "100%" : "0%"
                                                            }}>
                                                            <div id='salary_set' className="salary_set"></div>
                                                        </div>
                                                    </div>
                                                    <div className="salary_title">
                                                        Salary
                                                    </div>
                                                </div>

                                                <div className="experience_graph">
                                                    <div className="experience_height">
                                                        <div className="pr_graph_experience"
                                                            style={{ height: e.experience === "Internship" ? "10%" : e.experience === "Training" ? "50%" : e.experience === "Other Place Work" ? "99%" : "0%" }}>
                                                            <div id='experince_set' className="experince_set"></div>
                                                        </div>
                                                    </div>
                                                    <div className="experience_title">
                                                        Experience
                                                    </div>
                                                </div>

                                                <div className="job_graph">
                                                    <div className="job_height">
                                                        <div className="pr_graph_job"
                                                            style={{
                                                                height: e.job === "Full-Time" ? "100%" : e.job === "Part-Time" ? "50%" : "0%"
                                                            }}>
                                                            <div id='job_set' className="job_set"></div>
                                                        </div>
                                                    </div>
                                                    <div className="job_title">
                                                        Job Timing
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                                : <p>No Data</p>
                        }
                    </div>
                    </center>
                </div>
            </div>
        </div>
    )
}
