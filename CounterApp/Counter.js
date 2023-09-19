import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const updateCount = (updateType) => {
        if(updateType === "inc") {
            setCount(count => count + 1)
        } else {
            setCount(count => count - 1 >= 0 ? count -1: 0)
        }
    }

    return (
        <>
            <div className="main">
                <button className="btn action-btn" onClick={() => updateCount("dec")}>-</button>
                <span id="counter">{count}</span>
                <button className="btn action-btn" onClick={() => updateCount("inc")}>+</button>
            </div>
        </>
    )
}

export default Counter