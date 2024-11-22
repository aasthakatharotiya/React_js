import { signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../FirebaseConfig'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function DashBord() {

    const [record, setRecord] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const user = auth.currentUser

        if (user) {
            setRecord(user)
        }
        else {
            navigate("/")
        }
    }, [navigate])

    return (
        <div>
            <div className="main_dashbord">
                <div className='record_css'>
                    <h2>
                        {
                            record
                                ? (
                                    <>
                                        <p><strong className='text_color'>Name:</strong> {record.displayName || "N/A"}</p>
                                        <p><strong className='text_color'>Email:</strong> {record.email || "N/A"}</p>
                                        <p><strong className='text_color'>User ID:</strong> {record.uid || "N/A"}</p>

                                        {/* <img src={record.photoURL} alt="User profile" /> */}
                                    </>
                                )
                                : (<p>Loading...</p>)
                        }
                    </h2>
                </div>
            </div>
        </div>
    )
}
