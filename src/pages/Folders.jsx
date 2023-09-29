import React, { useRef } from 'react'
import { useLoaderData } from 'react-router-dom'
import Newfolderform from '../components/Newfolderform';

const Folders = () => {
    const user = useLoaderData()
    const newFolderForm = useRef()
    const handleClickMakeNew = ()=>{
        newFolderForm.current.hidden = false
        document.querySelector('#newFolderButton').hidden = true
    }
    const handleClickCancelNew = ()=>{
        document.querySelector('#newFolderButton').hidden = false
        newFolderForm.current.hidden = true
    }
  return (
    <div>
        <h1>{user.username}'s inbox</h1>
        {user.folders.map(f=>{
            return <div key={f.title}>{f.title}</div> 
        })}
        <button id='newFolderButton' onClick={handleClickMakeNew}>+ New Folder</button>
        <div ref={newFolderForm} hidden>
        <Newfolderform></Newfolderform>
        <button onClick={handleClickCancelNew}>Cancel New Form</button>
        </div>
    </div>
  )
}

export default Folders