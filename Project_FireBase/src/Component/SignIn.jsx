import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [slideDirection, setSlideDirection] = useState("slide-in-right")

  const navigate = useNavigate()

  useEffect(() => {
    setSlideDirection("slide-in-right")
  }, [])

  // const handleSignIn = async () => {
  //     let user = await signInWithEmailAndPassword(auth, email, password)
  //     console.log(user)
  //     if(user){
  //         navigate("/dashbord")
  //     }

  //     setEmail("")
  //     setPassword("")
  // }

  const handleSignIn = () => {
    if (email && password) {

      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          navigate("/dashbord")

          setEmail("")
          setPassword("")
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
      <h1>SignIn</h1>

      <div className={`main_login ${slideDirection}`}>
        <h3>📩 Email</h3>
        <input type="text" placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)} />
        <h3>🔑 Password</h3>
        <input type="text" placeholder='Enter Your Password...' onChange={(e) => setPassword(e.target.value)} />

        <div className="btn_flex">
          <Link to={"/"}>Sign UP</Link>
          <button onClick={handleSignIn}>Login</button>
        </div>
      </div>

    </div>
  )
}
