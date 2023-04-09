import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css'
const App = () => {
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passChange = (e) => {
    setPass(e.target.value)
  }
  const handleSubmit = () => {
    if (email === '' && password === '') {
      inputEmailRef.current.focus()
    } else if (email === '') {
      inputEmailRef.current.focus()
    } else if (password === '') {
      inputPasswordRef.current.focus()
    }
  }
  return (
    <div id="main">
      Email
      <input
        id="inputEmail"
        type="text"
        value={email}
        ref={inputEmailRef}
        onChange={emailChange}
      />
      <br />
      Password
      <input
        id="inputPassword"
        type="text"
        value={pass}
        ref={inputPasswordRef}
        onChange={passChange}
      />
      <br />
      <button id="submitButton" onClick={handleSubmit}>
        Submit
      </button>
      <br />
      <p id="emailText">Your Email : {email}</p>
      <p id="passwordText">Your Password : {pass}</p>
    </div>
  )
}

export default App
