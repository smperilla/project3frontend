import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Test