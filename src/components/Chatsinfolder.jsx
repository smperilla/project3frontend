import React, { useState } from "react";
import Openchat from "./Openchat";

const Chatsinfolder = (props) => {
    // const [openChat, setOpenChat] = useState(null)
    // const showChat = (e)=>{
    //     const chatToOpen = props.openFolder.chats.find(c=>c._id==e.target.id)
    //     setOpenChat(chatToOpen)
    // }
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
        return result;
      }
      
      const uniqueKey = generateRandomString(10);
    const loaded = ()=>{
        return (
            <div>
                <h2>
                    {props.openFolder.title}
                </h2>
                {props.openFolder.chats.map(c=>{
                    return <div key={c._id+props.user._id+uniqueKey} style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><div className={props.openFolder._id} id={c._id} onClick={props.showChat} >{c.subject}</div><button style={{width:'30px',height:'30px'}} onClick={props.openMoveFolder}>↩️</button></div>
                })}
                <div>
                {props.openFolder.chats.length===0?'this folder is empty': ''}
                </div>
                <div id="openchat" className="startchatting">
                <Openchat 
                    openChat={props.openChat} 
                    emit={props.emit}
                    sendMessage={props.sendMessage}
                    handleSendMsgChange={props.handleSendMsgChange}
                    textBar={props.textBar}
                    user={props.user}
                    >    
                </Openchat>
                    </div>
            </div>
        )
    }
    const loading = ()=>{
        return <h2>No Folder Open</h2>
    }
    return props.openFolder? loaded():loading()
}
export default Chatsinfolder