import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function APIWithAxios() {

    const [record, setRecord] = useState("")

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        let response = await axios.get("https://fakestoreapi.in/api/products/category?type=mobile")
        console.log(response.data)
        setRecord(response.data)
    }

  return (
    <div>
        <h1>APIWithAxios</h1>

        {
            record && 
            record.map((e, i) => {
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
  )
}
