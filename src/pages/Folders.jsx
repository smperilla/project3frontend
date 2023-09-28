import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Folders = () => {
    const users = useLoaderData()
    console.log(users);
  return (
    <div>
        {users[0].folders.map(f=>{
            return <div key={f.title}>{f.title}</div> 
        })}
    </div>
  )
}

export default Folders