import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Folders = () => {
    const user = useLoaderData()
    console.log(user);
  return (
    <div>
        <h1>{user.username}'s inbox</h1>
        {user.folders.map(f=>{
            return <div key={f.title}>{f.title}</div> 
        })}
    </div>
  )
}

export default Folders