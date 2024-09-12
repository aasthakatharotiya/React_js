import React, { useEffect, useRef } from 'react'

export default function UseRef() {
    const arr = ["Apple", "Mango", "Orange", "Banana", "Graps"]

    const input_ref = useRef();

    const handleclick = () => {
        input_ref.current.focus();
        alert(`The Value is ${input_ref.current.value}`)
        // let p = input_ref.current.value
        // alert(`The Value is ${p}`)
    }

    useEffect(() => {
        setTimeout(() => {
            input_ref.current.focus();
            alert(`The Value is ${input_ref.current.value}`)
            // let p = input_ref.current.value
            // alert(`The Value is ${p}`)
        }, 5000);
    }, [])

    return (
        <div>
            <h1>List Key</h1>
            {
                arr.map((e, i) => {
                    return <p key={i}>{e}</p>
                })
            }

            <h1>UseRef</h1>
            <input type="text" ref={input_ref} />
            <button onClick={handleclick}>Click</button>
        </div>
    )
}
