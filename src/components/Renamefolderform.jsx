import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const Renamefolderform = (props) => {
    
    const [renameFolderForm, setRenameFolderForm] = useState(props.f)
    const handleChangeReNameFolder = (e)=>{
        setRenameFolderForm(prevState=>{
            return {...prevState, [e.target.name] : e.target.value}
        })
    }
    const resetForm = (e)=>{
        setRenameFolderForm(props.f)
        props.cancelReName(e)
    }
  return (
    <div>
        <button onClick={props.handleClickReName}>✏️</button>
        <form onSubmit={props.renameFolderSocket} hidden>
            <input name='id' defaultValue={renameFolderForm._id} hidden/>
            <input onChange={handleChangeReNameFolder} type="text" name='title' placeholder='rename folder' value={renameFolderForm.title}/>
            <input type="submit" value="rename folder"/>
        </form> 
        {/* <Form action={`/renameFolder/${props.f._id}`} method='post' hidden>
            <input onChange={handleChangeReNameFolder} type="text" name='title' placeholder='rename folder' value={renameFolderForm.title}/>
            <input type="submit" value="rename folder"/>
        </Form>  */}
        <button onClick={resetForm} hidden>cancel rename</button>
    </div>
  )
}

export default Renamefolderform