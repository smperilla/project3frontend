import React from 'react'
import { Form } from 'react-router-dom'

const Newfolderform = () => {
  return (
    <div>
        <Form action='/createFolder' method='post'>
            <input type="text" placeholder='New Folder Name' name='title'/>
            <input type="submit" value="Create New Folder" />
        </Form>
    </div>
  )
}

export default Newfolderform