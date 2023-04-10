import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css'
const App = () => {
  const inputEmailRef = useRef(null)
  const inputPasswordRef = useRef(null)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [displayEmail, setDisplayEmail] = useState('')
  const [displayPass, setDisplayPass] = useState('')
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passChange = (e) => {
    setPass(e.target.value)
  }
  const handleSubmit = () => {
    if (email.trim() === '') {
      inputEmailRef.current.focus()
    } else if (pass.trim() === '') {
      inputPasswordRef.current.focus()
    } else {
      setDisplayEmail(email)
      setDisplayPass(pass)
      document.getElementById('emailText').innerHTML = `Your Email: ${email}`
      document.getElementById(
        'passwordText'
      ).innerHTML = `Your Password: ${pass}`
    }
    // setPass('')
    // setEmail('')
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
      <p id="emailText">Your Email : {displayEmail}</p>
      <p id="passwordText">Your Password : {displayPass}</p>
    </div>
  )
}

export default App
