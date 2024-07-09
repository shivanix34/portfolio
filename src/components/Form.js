import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formspree/id" method="POST" >
            <label>
                Your Name
            </label>
            <input type="text" name="user_name" autoComplete="off" required/>
            <label>
                Email
            </label>
            <input type="email" name="user_email" autoComplete="off" required/>
            <label>
                Message
            </label>
            <textarea name="message" rows="6" placeholder="Type your Message here" autoComplete="off" required/>
            <input type="submit" value="Send" className="btn" />
        </form>
    </div>
  )
}

export default Form
