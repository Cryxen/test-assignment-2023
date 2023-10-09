import { useState } from "react"

const Alternative2 = () => {
    const [count, setCount] = useState(0)
    
    const counter = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <>
        <p>{count}</p>
        <button onClick={counter}>Button counter</button>
        </>
    )
}
export default Alternative2