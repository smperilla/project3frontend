import React, { useRef } from 'react'
import { useLoaderData } from 'react-router-dom'
import Newfolderform from '../components/Newfolderform';

const Folders = () => {
    const user = useLoaderData()
    const newFolderForm = useRef()
    const handleClick = ()=>{
        document.querySelector('button').style.color = 'green'
        console.log(document.querySelector('button'))
    }
  return (
    <div>
        <h1>{user.username}'s inbox</h1>
        {user.folders.map(f=>{
            return <div key={f.title}>{f.title}</div> 
        })}
        <button onClick={handleClick}>+ New Folder</button>
        <div ref={newFolderForm}>
        <Newfolderform></Newfolderform>
        </div>
    </div>
  )
}

export default Folders