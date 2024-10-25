import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSignUp = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
        if(user){
            navigate("/dashbord")
        }
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex_css'>
        <h1>SignUp</h1>
        <h3>Email</h3>
        <input type="text" placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)} />
        <h3>Password</h3>
        <input type="text" placeholder='Enter Your PassWord...' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleSignUp}>Sing Up</button> &nbsp;&nbsp;
        <Link to={"/signin"}>Sign In</Link>
    </div>
  )
}
