import React, { useEffect, useState } from 'react'

export default function APIWithFetch() {

    const [data, setData] = useState()
    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        const response = await fetch("https://fakestoreapi.in/api/products/category?type=mobile")
        // const response = await fetch("https://fakestoreapi.in/api/products/category?type=tv&sort=desc")
        // const response = await fetch("https://dummyjson.com/products")
        console.log(response)
        const res = await response.json()
        console.log(res)
        setData(res.products)
    }

    return (
        <div>
            <center>
                <h1 style={{color: 'rgb(255, 0, 106)'}}>APIs With Fetch</h1>
            </center>
            <div className="main_product">
                {
                    data &&
                    data.map((e, i) => {
                        return (<div key={i} className='product_div'>
                            <h2>{e.title}</h2>
                            <h3>{e.price}</h3>
                            <div className="img">
                                <img src={e.image} alt="" />
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
