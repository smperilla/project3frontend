import React from 'react'
import { Form } from 'react-router-dom'

const Newmessageform = () => {
  return (
    <div>
        <Form action='/newChat' method='post'>
            <label>To:</label>
            <input type="text" name='recipients' placeholder='recipients'/>
            <label>Subject:</label>
            <input type="text" name='subject' placeholder='recipients'/>
            <input type="text" name="zap" placeholder='message here'/>
            <input type="submit" value="send" />
        </Form>
    </div>
  )
}

export default Newmessageform