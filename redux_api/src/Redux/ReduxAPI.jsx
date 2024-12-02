import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { fetchApi } from '../Feature/ApiSlice'
import { Link } from 'react-router-dom'

export default function ReduxAPI() {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchApi())
    // }, [])

    const record = useSelector((state) => {
        return state.apiKey
    })

    return (
        <div>
            <center><h1>ReduxAPI</h1></center>

            <div className="nav_btn">
                <Link to="/Mens">
                    <button>Mens</button>
                </Link>
                <Link to="/Womens">
                    <button>Womens</button>
                </Link>
                <Link to="/Food">
                    <button>Food</button>
                </Link>
                <Link to="/Beauty">
                    <button>Beauty</button>
                </Link>
                <Link to="/Gift">
                    <button>Gift</button>
                </Link>
                <Link to="/Electronic">
                    <button>Electronic</button>
                </Link>
            </div>

            <div className="pr_main">
                {
                    record.data &&
                    record.data.map((e) => (
                        <div key={e.id} className='pr_div'>
                            <div className="pr_img">
                                <img src={e.image} alt="" />
                            </div>
                            <h2>{e.title}</h2>
                            <h3>${e.price}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
