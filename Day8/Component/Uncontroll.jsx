import React, { useRef } from 'react'

export default function Uncontroll() {

    const input_ref = useRef()
    const handleClick = () => {
        let value = input_ref.current.value
        alert(`Input Value is ${value}`)
    }

  return (
    <div>
        <h1>Uncontrollrd Components</h1>
        <input type="text" ref={input_ref} />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
