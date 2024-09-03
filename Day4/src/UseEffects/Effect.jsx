import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [count_1, setCount_1] = useState(0)
    const [count_2, setCount_2] = useState(0)
    const [count_3, setCount_3] = useState(0)
    useEffect(() => {
        console.log("Component Did Mount...")
    })
    useEffect(() => {
        console.log("Component Did Unmount...")
    },[])
    useEffect(() => {
        console.log("Component Will Update...")
    }, [count_3])
  return (
    <div>
        <h1>UseEffect</h1>
        <h2>----------- Life Cycle Types -----------</h2>
        <br />
        <span>1. Component Did Mount</span><br /><br />
        <span>2. Component Did Unmount</span><br /><br />
        <span>3. Component Will Update</span><br /><br />
        <div className="flex_main">
            <div>
                <h2>{count_1}</h2>
                <button onClick={() => setCount_1(count_1 + 1)}>Mount</button>
            </div>
            <div>
                <h2>{count_2}</h2>
                <button onClick={() => setCount_2(count_2 + 1)}>Unmount</button>
            </div>
            <div>
                <h2>{count_3}</h2>
                <button onClick={() => setCount_3(count_3 + 1)}>Update</button>
            </div>
        </div>
    </div>
  )
}
