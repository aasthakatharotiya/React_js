import React, { useState } from 'react'

export default function Count() {
    var [count, setCount] = useState(0)

    var increase = () => {
        setCount(count + 1)
    }
    var decrease = () => {
        setCount(count - 1)
    }
    var reset = () => {
        setCount(count = 0)
    }
    return (
        <div>
            <h1>UseState</h1>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
