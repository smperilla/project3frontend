import React, { useRef, useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import Newfolderform from '../components/Newfolderform';
import Renamefolderform from '../components/Renamefolderform';
import '../components/Sidebar.css'
import Chatsinfolder from '../components/Chatsinfolder';
import Newmessageform from '../components/Newmessageform';

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
    const [openChat, setOpenChat] = useState(null)
    const showChat = (e)=>{
        const chatToOpen = openFolder.chats.find(c=>c._id==e.target.id)
        setOpenChat(chatToOpen)
    }
    const [openFolder, setOpenFolder] = useState(null)
    const showFolder = (e)=>{
        const folderToOpen = user.folders.find(f=>f._id==e.target.id)
        setOpenFolder(folderToOpen)
        setOpenChat(null)
    }
    const newDraft = ()=>{
        document.querySelector('#spaceForNewMessage').hidden = true
        document.querySelector('#newMessageForm').hidden = false
    }
  return (
    <div className='folders'>
        <h1>{user.username}'s inbox</h1>

        <div className='sidebar'>  
        <button onClick={newDraft}>New Message</button>
        {user.folders.map(f=>{
            return <div id={f._id} key={f._id} className='title' onClick={showFolder}>
                <div onClick={showFolder} id={f._id}>{f.title}</div>
                {f.title==='inbox'||f.title==='deleted'||f.title==='sent'||f.title=='drafts' ? <div></div> : <div>
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
        <div id='spaceForNewMessage'>
        <Chatsinfolder openFolder={openFolder} openChat={openChat} showChat={showChat}></Chatsinfolder>
        </div>
        <div id='newMessageForm' hidden><Newmessageform></Newmessageform></div>
    </div>
  )
}

export default Folders