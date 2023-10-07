import React from 'react'
import { Form } from 'react-router-dom'

const Newmessageform = (props) => {
  return (
    <div>
        <form onSubmit={props.startNewChat}>
            <label htmlFor='recipients'>To:</label>
            <input type="text" name='recipients' placeholder='recipients'/>
            <label htmlFor='subject'>Subject:</label>
            <input type="text" name='subject' placeholder='subject'/>
            <input type="text" name="zap" placeholder='message here'/>
            <input type="submit" value="send" />
        </form>
        {/* <Form action='/newChat' method='post'>
            <label>To:</label>
            <input type="text" name='recipients' placeholder='recipients'/>
            <label>Subject:</label>
            <input type="text" name='subject' placeholder='subject'/>
            <input type="text" name="zap" placeholder='message here'/>
            <input type="submit" value="send" />
        </Form> */}
        <button onClick={props.cancelSend}>Cancel</button>
    </div>
  )
}

export default Newmessageform