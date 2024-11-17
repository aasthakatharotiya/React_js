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
          navigate("/CURD_dashbord")

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

      <div className="main_singIn">
        <div className="signIn_left">

          <h1>Don't Have An Account ?</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus quae enim exercitationem pariatur assumenda. Quis voluptates, tenetur ea mollitia dolore, maiores tempora perferendis, totam aspernatur consequatur dolores sunt illum.
          </p>

          <Link to={"/"} onClick={() => setSlideDirection("slide-out-left")}>
            <button>
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Sign UP
            </button>
          </Link>
        </div>

        <div className="signIn_right">

          <div className={`main_login ${slideDirection}`}>
            <center>
              <h1>Sign In</h1>

              <button className='face_btn'>
                <img src="https://i.pinimg.com/originals/19/00/54/19005430985f1e7e4022b4301b44ba35.gif" alt="" />
              </button>
            </center>

            <h3>📩 Email</h3>
            <input type="text" placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)} />
            <h3>🔑 Password</h3>
            <input type="password" placeholder='Enter Your Password...' onChange={(e) => setPassword(e.target.value)} />

            <center className='btn_width'>
              <div className="btn_flex">
                <button onClick={handleSignIn}>Login</button>
              </div>
            </center>
          </div>
        </div>
      </div>

    </div>
  )
}
