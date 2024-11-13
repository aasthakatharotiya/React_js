import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("")
  const [hobby, setHobby] = useState("")
  const [slideDirection, setSlideDirection] = useState("slide-in-left")

  const navigate = useNavigate()

  useEffect(() => {
    setSlideDirection("slide-in-left")
  }, [])


  // const handleSignUp = async () => {
  //     let user = await createUserWithEmailAndPassword(auth, email, password)
  //     console.log(user)
  //     if(user){
  //         navigate("/dashbord")
  //     }
  //     setEmail("")
  //     setPassword("")
  // }

  const handleSignUp = () => {
    if (name && email && number && city && password && hobby) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(data => {
          setDoc(doc(db, "users", data.user.uid), {
            name, email, number, city, hobby
          })
          console.log("User added")

          // Clear inputs if sign-up is successful
          setName("")
          setNumber("")
          setCity("")
          setEmail("")
          setPassword("")
          setHobby("")

        })
        .catch(error => {
          console.error("Error during sign up:", error)
        })
    }
    else {
      alert("Pleasse, Fill Out All Field")
    }
  }

  return (
    <div className='flex_css'>
      <h1>SignUp</h1>

      <div className={`main_form ${slideDirection}`}>

        <div className="main_info">
          <div className="left_info">
            <h3>👤 Name</h3>
            <input type="text" value={name} placeholder='Enter Name...' onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="right_info">
            <h3>📞 Phone Number</h3>
            <input type="number" value={number} placeholder='Enter Your Number...' onChange={(e) => setNumber(e.target.value)} />
          </div>
        </div>

        <div className="main_info">
          <div className="left_info">
            <h3>📧 Email</h3>
            <input type="email" value={email} placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="right_info">
            <h3>🔒 Password</h3>
            <input type="text" value={password} placeholder='Enter Your PassWord...' onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <div className="main_info">
          <div className="left_info">
          {/* 🏙️🏞️ */}
            <h3>🏕️ City</h3>
            <input type="text" value={city} placeholder='Enter Your City...' onChange={(e) => setCity(e.target.value)} />
          </div>

          <div className="right_info">
            <h3>🎨 Hobby</h3>
            <select name="" id="" value={hobby} onChange={(e) => setHobby(e.target.value)}>
              <option value="">Select Your Hobby</option>
              <option value="Drawing">Drawing</option>
              <option value="Dancing">Dancing</option>
              <option value="Singing">Singing</option>
              <option value="Learning">Learning</option>
              <option value="Shopping">Shopping</option>
              <option value="Cooking">Cooking</option>
            </select>
          </div>
        </div>

        <div className="btn_flex">
          <button onClick={handleSignUp}>Sing Up</button>
          <Link to={"/signin"}>Sign In</Link>
        </div>

      </div>

    </div>
  )
}
