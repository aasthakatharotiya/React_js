import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

export default function DashBord() {

  const [user, setUser] = useState(null)
  const [record, setRecord] = useState(null)

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
    })
  }, [])

  useEffect(() => {
    if (user) {
      fetchUser()
    }
  }, [user])

  const fetchUser = () => {
    console.log(user.uid)
    getDoc(doc(db, "users", user.uid))

      .then(data => {
        console.log(data.data())
        setRecord(data.data())
      })
  }

  return (
    <div className='dashbord'>
      <Link to={"/signin"}>
        <button>Sign In</button>
      </Link>
      <h1>
        Hello,&nbsp;
        {
          record && <span>{record.name}</span>
        }
        &nbsp;Welcome To Our WebPage
      </h1>

    </div>
  )
}
