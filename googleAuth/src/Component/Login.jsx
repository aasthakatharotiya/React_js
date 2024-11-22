import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../../FirebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const handleLogin = async () => {
        await signInWithPopup(auth, provider)

            .then((user) => {
                console.log(user)

                navigate("/DashBord")
            })
    }

    return (
        <div className="main_login_bg">
            {/* <div className='main_form'>
                <h1>Sign IN</h1>

                <div className="input_width">
                    <h3>Name</h3>
                    <input type="text" placeholder='Enter Name...' />
                </div>

                <div className="input_width">
                    <h3>Email</h3>
                    <input type="email" placeholder='Enter Email...' />
                </div>

                <div className="input_width">
                    <h3>Password</h3>
                    <input type="password" placeholder='Enter Password...' />
                </div>

                <br />
                <button onClick={handleLogin}>Log IN</button>
            </div> */}

            <div className='main_form_css'>
                <button className='face_btn'>
                    <img src="https://i.pinimg.com/originals/19/00/54/19005430985f1e7e4022b4301b44ba35.gif" alt="" />
                </button>
                <h2>Sign IN</h2>

                <div style={{marginTop: "-20px"}} className="input_width">
                    <h3><i className="fa-regular fa-user"></i></h3>
                    <input type="text" placeholder='Name...' />
                </div>

                <div className="input_width">
                    <h3><i className="fa-regular fa-envelope"></i></h3>
                    <input type="email" placeholder='Email...' />
                </div>

                <div className="input_width">
                    <h3><i className="fa-solid fa-unlock-keyhole"></i></h3>
                    <input type="password" placeholder='Password...' />
                </div>

                <button className='login_btn'>Log IN</button>

                <button className='google_btn' onClick={handleLogin}>
                    <div className="btn_flex">
                        <div className="google_img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png" alt="" />
                        </div>
                        <div className="google_text">
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}