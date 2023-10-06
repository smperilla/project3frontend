import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

const Openchat = (props) => {
    const loaded = ()=>{
        return(
            <div>
                {props.openChat.users.length===2?
                <h3>Conversation with: {props.openChat.users[0].username} and {props.openChat.users[1].username}</h3>
                :
                <h3>Conversation with: {props.openChat.users.map(u=>(u.username+' '))}</h3>
                }
                <h3>Subject: {props.openChat.subject}</h3>
                {props.openChat.zaps.map((z,i)=>{
                    return (
                        <div key={z+i}>
                            {props.openChat.zapAuthors[i].username}: {z}
                        </div>
                    )
                })}
                {/* <Form action={`/sendMessage/${props.openChat._id}`} method='post'>
                    <input type="text" name='zap' placeholder='type message here'/>
                    <input type="submit" value="Send"/>
                </Form> */}
                <form onSubmit={props.sendMessage}>
                    <input onChange={props.handleSendMsgChange} type="text" name='zap' placeholder='type message here' value={props.textBar.zap}/>
                    <input type="submit" value='send' />
                </form>
            </div>
        )
    }
    const loading = ()=>{
        return(
            <div>Select a Chat to Open it</div>
        )
    }
    return props.openChat? loaded(): loading()
}

export default Openchat