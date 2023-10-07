import React, { useEffect, useRef, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import Newfolderform from "../components/Newfolderform";
import Renamefolderform from "../components/Renamefolderform";
import "../components/Sidebar.css";
import Chatsinfolder from "../components/Chatsinfolder";
import Newmessageform from "../components/Newmessageform";
import Logout from "../components/Logout";
import { io } from 'socket.io-client';
import Movefolderpopup from "../components/Movefolderpopup";

const Folders = () => {
  const socket = io(process.env.REACT_APP_API_KEY);
    // , {path:'/socket.io/'}
    useEffect(() => {
      socket.on('connect', () => {
        console.log('Connected to Socket.io server');
        console.log(document.cookie)
      });
      socket.on('disconnect', () => {
        console.log('disConnected from Socket.io server');
      });
      socket.on('message', (data) => {
        console.log('Received message from server:', data);
      });
      
      socket.on('hello', (word)=>{
          console.log(word);
          fetchData()
      })
      
      socket.onAny((event, ...args) => {
          console.log(event, args);
        });
        console.log(socket);
      
      return 
    //   () => {
    //     socket.disconnect();
    //   };
    }, []);
    const emit = (e)=>{
      e.preventDefault()
      socket.emit('grabobject', 'grabing object')
    }
    socket.on('object', (word)=>{
        console.log(word);
        setUser(word)
    })

    const [user, setUser] = useState(useLoaderData())
    // const user = useLoaderData()
    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:4000/users/6515dc9ffc1ca272ca121d28')
            const data = await res.json();
            console.log('fetching')
            console.log(data);
            setUser(data);
        } catch (error) {
          console.error(error);
        }
      };
  const newFolderForm = useRef();
  const handleClickMakeNew = () => {
    newFolderForm.current.hidden = false;
    document.querySelector("#newFolderButton").hidden = true;
  };
  const handleClickCancelNew = () => {
    document.querySelector("#newFolderButton").hidden = false;
    newFolderForm.current.hidden = true;
  };
  const handleClickReName = (e) => {
    let form = e.target.nextElementSibling;
    form.hidden = false;
    form.nextSibling.hidden = false;
    e.target.hidden = true;
    e.target.parentElement.parentElement.previousElementSibling.hidden = true;
  };
  const cancelReName = (e) => {
    let form = e.target.previousElementSibling;
    form.hidden = true;
    form.previousSibling.hidden = false;
    e.target.hidden = true;
    e.target.parentElement.parentElement.previousElementSibling.hidden = false;
  };
  const [openChat, setOpenChat] = useState(null);
  const showChat = (e) => {
    const chatToOpen = openFolder.chats.find((c) => c._id == e.target.id);
    setOpenChat(chatToOpen);
    setTextBar({zap:'', chatId:chatToOpen._id, folderId:openFolder._id})
  };
  const [openFolder, setOpenFolder] = useState(null);
  const showFolder = (e) => {
    const folderToOpen = user.folders.find((f) => f._id == e.target.id);
    setOpenFolder(folderToOpen);
    setOpenChat(null);
  };
  const newDraft = () => {
    document.querySelector("#spaceForNewMessage").hidden = true;
    document.querySelector("#newMessageForm").hidden = false;
  };
  const cancelSend = () =>{
    document.querySelector("#spaceForNewMessage").hidden = false;
    document.querySelector("#newMessageForm").hidden = true;
  }
  const [textBar, setTextBar] = useState()
  const handleSendMsgChange = (e)=>{
    setTextBar(prevState=>{
        return {...prevState, [e.target.name] : e.target.value}
    })
  }
  const sendMessage = (e)=>{
    e.preventDefault()
    console.log(textBar.zap);
    console.log(textBar.chatId);
    socket.emit('sendMessage', textBar, user._id)
  }
  socket.on('sentMessage', (updatedChat, updatedUser, folder)=>{
    setOpenChat(updatedChat)
    setTextBar({zap:'', chatId:updatedChat._id})
    setUser(updatedUser)
    setOpenFolder(folder)
    console.log(updatedChat);
  })
  const renameFolderSocket = (e)=>{
    e.preventDefault()
    console.log(e.target.title.value);
    socket.emit('renameFolder', e.target.title.value, e.target.id.value, user._id)
    let form = e.target
    form.hidden = true;
    form.previousSibling.hidden = false;
    form.nextSibling.hidden = true;
    e.target.parentElement.parentElement.previousElementSibling.hidden = false;
  }
  socket.on('renamedFolder', (updatedUser)=>{
    setUser(updatedUser)
  })
  const submitNewFolder = (e)=>{
    e.preventDefault()
    socket.emit('makeNewFolder', e.target.title.value, user._id)
    e.target.title.value = ''
    handleClickCancelNew()
  }
  socket.on('createdFolder', (updatedUser)=>{
    setUser(updatedUser)
  })
  const startNewChat = (e)=>{
    e.preventDefault()
    let recipients = e.target.recipients.value
    let subject = e.target.subject.value
    let zap = e.target.zap.value
    socket.emit('startNewChat', recipients, subject, zap, user._id)
    e.target.recipients.value = ''
    e.target.subject.value = ''
    e.target.zap.value = ''
    cancelSend()
  }
  socket.on('createdNewChat', (updatedUser)=>{
    setUser(updatedUser)
    setOpenFolder(updatedUser.folders[0])
  })
  const [moveFolderButton, setMoveFolderButton] = useState(false)
  const openMoveFolder =(e)=> {
    console.log(e.target);
    console.log(e.target.previousSibling.className);
    setMoveFolderButton({
      subject:e.target.previousSibling.innerText,
      chatId:e.target.previousSibling.id,
      currentFolderId:e.target.previousSibling.className
    })
  }
  const closeMoveFolder = ()=>{setMoveFolderButton(false)}
  const moveFolder = (e)=>{
    e.preventDefault()
    console.log(moveFolderButton);
    console.log(e.target.folderToMoveTo.value);
    if (moveFolderButton.currentFolderId===e.target.folderToMoveTo.value){
      setMoveFolderButton(false)
    }else {
      socket.emit('moveFolder', moveFolderButton, e.target.folderToMoveTo.value, user._id)
      setMoveFolderButton(false)
    }
  }
  socket.on('movedFolder', (updatedUser, destination)=>{
    setUser(updatedUser)
    setOpenFolder(destination)
  })
  return (
    <div className="folders">
      <div className="upperDiv">
        <h1 className="logo">ZapChat</h1>
        <h1 className="csinbox">{user.username}'s inbox</h1>
        <button onClick={emit}>Test!</button>
      </div>

      <div className="sidebar">
        <button onClick={newDraft}>New Message</button>
    <Logout/>   
        {user.folders.map((f) => {
          return (
            <div id={f._id} key={f._id} className="title" onClick={showFolder}>
              <div onClick={showFolder} id={f._id}>
                {f.title}
              </div>
              {f.title === "inbox" ||
              f.title === "deleted" ||
              f.title === "sent" ||
              f.title == "drafts" ? (
                <div></div>
              ) : (
                <div>
                  <Renamefolderform
                    cancelReName={cancelReName}
                    handleClickReName={handleClickReName}
                    f={f}
                    renameFolderSocket={renameFolderSocket}
                  ></Renamefolderform>
                </div>
              )}
              {/* style={{display:'flex', flexDirection:'row'}} */}
            </div>
          );
        })}
        <button id="newFolderButton" onClick={handleClickMakeNew}>
          + New Folder
        </button>
        <div ref={newFolderForm} hidden>
          <Newfolderform submitNewFolder={submitNewFolder}></Newfolderform>
          <button onClick={handleClickCancelNew}>Cancel New Form</button>
        </div>
      </div>
      <div id="spaceForNewMessage">
        <Chatsinfolder
          openFolder={openFolder}
          openChat={openChat}
          showChat={showChat}
          sendMessage={sendMessage}
          handleSendMsgChange={handleSendMsgChange}
          textBar={textBar}
          openMoveFolder={openMoveFolder}
        ></Chatsinfolder>
      </div>
      <div id="newMessageForm" hidden>
        <Newmessageform cancelSend={cancelSend} startNewChat={startNewChat}></Newmessageform>
      </div>
      <Movefolderpopup moveFolderTrigger={moveFolderButton} closeMoveFolder={closeMoveFolder} folders={user.folders} moveFolder={moveFolder}></Movefolderpopup>
    </div>
  );
};

export default Folders;
