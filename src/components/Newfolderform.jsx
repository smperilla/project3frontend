import React from 'react'
import { Form } from 'react-router-dom'

const Newfolderform = (props) => {
  return (
    <div>
        {/* <Form action='/createFolder' method='post'>
            <input type="text" placeholder='New Folder Name' name='title'/>
            <input type="submit" value="Create New Folder" />
        </Form> */}
        <form onSubmit={props.submitNewFolder}>
            <input type="text" placeholder='New Folder Name' name='title'/>
            <input type="submit" value="Create New Folder" />
        </form>
    </div>
  )
}

export default Newfolderform