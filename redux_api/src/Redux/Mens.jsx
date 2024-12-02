import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Mens() {

    const record = useSelector((state) => state.apiKey)

    const Men_PR = record.data.filter(item => item.category === "men")

    return (
        <div>
            <center><h1>Mens</h1></center>

            <div className="nav_btn">
                <Link to="/">
                    <button>All</button>
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
                    Men_PR.map((e) => (
                        <div key={e.id} className='pr_div men'>
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
