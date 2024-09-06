import React, { useState } from 'react'

export default function Form() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [sub, setSub] = useState("")
    const [msg, setMsg] = useState("")
    const [displayMsg, setDisplayMsg] = useState("hyy") // Default message is 'hyy'

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Form Submit Successfully...")

        let obj = {
            name: name,
            subject: sub
        }
        console.log(obj)

        setDisplayMsg(msg)
    }

    // Function to find the antonyms using the Datamuse API
    const findAntonym = async (word) => {
        try {
            const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`)
            const data = await response.json()
            // Return the first antonym found, if any
            return data.length > 0 ? data[0].word : word
        } 
        catch (error) 
        {
            console.error("Error fetching antonym:", error)
            return word // Return the word itself in case of error
        }
    }
    
    const handleOppositeMessage = async () => {
        
        if (displayMsg === "hyy") {
            setDisplayMsg("bye")
            return
        }

        // Split the message into words and find antonyms for each
        const words = displayMsg.split(' ')
        const oppositeWords = await Promise.all(words.map(async (word) => {
            const antonym = await findAntonym(word.toLowerCase())
            return antonym
        }))
        setDisplayMsg(oppositeWords.join(' '))
    }

    return (
        <div>
            <h1>----------------- OnClick, OnChange, onSubmit -----------------</h1>
            <h1>{count}</h1>
            <button id='count_btn' onClick={() => setCount(count + 1)}>Click</button>

            <form onSubmit={(event) => handleSubmit(event)}>
                <br />
                <input id='name' type="text" placeholder='Enter Your Name...' onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <input id='sub' type="text" placeholder='Enter Your Course...' onChange={(e) => setSub(e.target.value)} />
                <br /><br />
                <textarea 
                    id="message" 
                    cols="30" 
                    rows="5" 
                    placeholder='Enter Some Message...' 
                    onChange={(e) => setMsg(e.target.value)}
                ></textarea>
                <br /><br />
                <button type='submit' id='submit'>Submit</button>
            </form>

            <div className="comment">
                <h1>Your Message</h1>
                <p>{displayMsg ? displayMsg : "hyy"}</p>
                <button onClick={handleOppositeMessage}>Opposite</button>
            </div>
        </div>
    )
}
