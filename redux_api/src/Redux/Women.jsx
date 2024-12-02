import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Women() {
    const record = useSelector((state) => state.apiKey)

    const Women_PR = record.data.filter(item => item.category === "women")

    return (
        <div>
            <center><h1>Women</h1></center>

            <div className="nav_btn">
                <Link to="/">
                    <button>All</button>
                </Link>
                <Link to="/Mens">
                    <button>Mens</button>
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
                    Women_PR.map((e) => (
                        <div key={e.id} className='pr_div women'>
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
