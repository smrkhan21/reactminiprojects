import { useState } from 'react'
import './App.css'

function App() {

  const handleClick = event => {
    event.currentTarget.classList.toggle('active');
  };

  return (
    <>
      <div className="main">
        <h1>FAQ Accordian</h1>
        <div className="accordian">
            <div className="question">
                <h2>Question 1</h2>
                <i className="icon fa-solid fa-caret-down" onClick={handleClick}></i>
            </div>
            <div className="answer">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et autem, soluta consectetur illo deserunt recusandae dolorum itaque nulla, asperiores, harum facilis! Rem obcaecati ipsam in, ducimus sunt quas voluptates atque nemo neque dicta commodi cum dignissimos ex adipisci. Autem, est?</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
