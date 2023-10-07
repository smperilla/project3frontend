import React, { useState } from 'react'
import Openchat from './Openchat'

const Chatsinfolder = (props) => {
    // const [openChat, setOpenChat] = useState(null)
    // const showChat = (e)=>{
    //     const chatToOpen = props.openFolder.chats.find(c=>c._id==e.target.id)
    //     setOpenChat(chatToOpen)
    // }
    const loaded = ()=>{
        return (
            <div>
                <h2>
                    {props.openFolder.title}
                </h2>
                {props.openFolder.chats.map(c=>{
                    return <div key={c._id} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}><div className={props.openFolder._id} id={c._id} onClick={props.showChat} >{c.subject}</div><button style={{width:'30px',height:'30px'}} onClick={props.openMoveFolder}>↩️</button></div>
                })}
                <div>
                {props.openFolder.chats.length===0?'this folder is empty': ''}
                </div>
                <Openchat 
                    openChat={props.openChat} 
                    emit={props.emit}
                    sendMessage={props.sendMessage}
                    handleSendMsgChange={props.handleSendMsgChange}
                    textBar={props.textBar}
                    >    
                </Openchat>
            </div>
        )
    }
    const loading = ()=>{
        return <h2>No Folder Open</h2>
    }
    return props.openFolder? loaded():loading()
}

export default Chatsinfolder