import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSignIn = async () => {
        let user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user)
        if(user){
            navigate("/dashbord")
        }

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex_css'>
        <h1>SignIn</h1>
        <h3>Email</h3>
        <input type="text" placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)} />
        <h3>Password</h3>
        <input type="text" placeholder='Enter Your Password...' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}
