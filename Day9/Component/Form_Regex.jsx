import React from 'react'
import { useState } from 'react'

export default function Form_Regex() {

  const [firstname, setFirstName] = useState("")
  const [firstnameErr, setFirstNameErr] = useState("")

  const [lastname, setLastName] = useState("")
  const [lastnameErr, setLastNameErr] = useState("")

  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")

  const [phonecall, setPhoneCall] = useState("")
  const [phonecallErr, setPhoneCallErr] = useState("")

  const [grid, setGrId] = useState("")
  const [gridErr, setGrIdErr] = useState("")

  const [state, setState] = useState("")
  const [stateErr, setStateErr] = useState("")

  const [address, setAddress] = useState("")
  const [addressErr, setAddressErr] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // ----------------------- First Name -----------------------
    if(!firstname){
      setFirstNameErr("First Name is Required...")
    }
    else if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(firstname)){
      setFirstNameErr("Please Enter Valid First Name like Aastha...")
    }
    else{
      setFirstNameErr("")
    }

    // ----------------------- Last Name -----------------------

    if(!lastname){
      setLastNameErr("Last Name is Required...")
    }
    else if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(lastname)){
      setLastNameErr("Please Enter Valid First Name like Aastha...")
    }
    else{
      setLastNameErr("")
    }

    // ----------------------- Email -----------------------

    if(!email){
      setEmailErr("Email is Required...")
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      setEmailErr("Please Enter Valid Email Like aastha@gmail.com...")
    }
    else{
      setEmailErr("")
    }


    // ----------------------- Phone Number -----------------------

    if(!phonecall){
      setPhoneCallErr("Phone Number is Required...")
    }
    else if(!/^[0-9]+$/.test(phonecall)){
      setPhoneCallErr("Please Enter only 10 Digit Like 1234567890...")
    }
    else{
      setPhoneCallErr("")
    }


    // ----------------------- GR ID -----------------------

    if(!grid){
      setGrIdErr("GR ID is Required...")
    }
    else if(!/^[0-9]+$/.test(grid)){
      setGrIdErr("Please Enter only 4 Digit Like 7257...")
    }
    else{
      setGrIdErr("")
    }


    // ----------------------- State -----------------------

    if(!state){
      setStateErr("State is Required...")
    }
    else{
      setStateErr("")
    }

    // ----------------------- Address -----------------------

    if(!address){
      setAddressErr("Address is Required...")
    }
    else{
      setAddressErr("")
    }


    let obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonecall: phonecall,
      grid: grid,
      state: state,
      address: address
    }
    console.log(obj)
  }

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="main">
          <h3>Name</h3>
          <div className="name_flex">
            <div className="first_name">
              <input type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
              <span>{firstnameErr}</span>
            </div>
            <div className="last_name">
              <input type="text" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
              <span>{lastnameErr}</span>
            </div>
          </div>
        </div>

        <div className="main">
          <h3>Email</h3>
          <input type="text" placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
          <span>{emailErr}</span>
        </div>

        <div className="main">
          <h3>Phone Number</h3>
          <div className="call">
            <div className="call_head">91+</div>
            <div className="call_num">
              <input type="text" maxLength={10} onChange={(e) => setPhoneCall(e.target.value)} placeholder="Enter 10-digit number" />
            </div>
          </div>
          <span>{phonecallErr}</span>
        </div>

        <div className="main">
          <div className="main_flex">

            <div className="GR_ID">
              <h3>GR ID</h3>
              <input type="text" maxLength={4} placeholder='Enetr GR ID' onChange={(e) => setGrId(e.target.value)}/>
              <span>{gridErr}</span>
            </div>

            <div className="state">
              <h3>State</h3>
              <select name="" id="" onChange={(e) => setState(e.target.value)}>
                <option value="">Select State</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
              <span>{stateErr}</span>
            </div>

          </div>
        </div>

        <div className="main">
          <h3>Address</h3>
          <textarea cols="30" rows="4" placeholder='Enter Your Address' onChange={(e) => setAddress(e.target.value)}></textarea>
          <span>{addressErr}</span>
        </div>

        <div className="form_btn">
          <button type='submit' className='submit_btn'>Submit</button>
          <button type='reset' className='reset_btn'>Reset</button>
        </div>
      </form>
    </div>
  )
}
