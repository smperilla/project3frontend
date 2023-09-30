import React, { useRef, useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import Newfolderform from '../components/Newfolderform';
import Renamefolderform from '../components/Renamefolderform';
import '../components/Sidebar.css'

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
    const handleClickReName = (e)=>{
        let form = e.target.nextElementSibling
        form.hidden = false
        form.nextSibling.hidden = false
        e.target.hidden = true
        e.target.parentElement.parentElement.previousElementSibling.hidden = true
    }
    const cancelReName = (e)=>{
        let form = e.target.previousElementSibling
        form.hidden = true
        form.previousSibling.hidden = false
        e.target.hidden = true
        e.target.parentElement.parentElement.previousElementSibling.hidden = false
    }
  return (
    <div className='folders'>
        <h1>{user.username}'s inbox</h1>

        <div className='sidebar'>  
        {user.folders.map(f=>{
            return <div key={f.title} className='title' >
                <div>{f.title}</div>
                {f.title==='inbox'||f.title==='deleted'||f.title==='sent' ? <div></div> : <div>
                <Renamefolderform cancelReName={cancelReName} handleClickReName={handleClickReName} f={f}></Renamefolderform>
                </div>}
                {/* style={{display:'flex', flexDirection:'row'}} */}
                </div> 
        })}
        <button id='newFolderButton' onClick={handleClickMakeNew}>+ New Folder</button>
        <div ref={newFolderForm} hidden>
        <Newfolderform></Newfolderform>
        <button onClick={handleClickCancelNew}>Cancel New Form</button>
        </div>
        </div>
    </div>
  )
}

export default Folders