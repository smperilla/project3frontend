import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function App() {
  const socket = io('http://127.0.0.1:4000', {autoConnect:false, path:'/socket.io/'});
  useEffect(() => {
    console.log(socket)
    // Now you can use 'socket' to listen for events and emit data to the server.
    socket.on('connect', () => {
      console.log('Connected to Socket.io server');
    });
    socket.on('disconnect', () => {
      console.log('disConnected from Socket.io server');
    });
    // socket.on('connect_error', ()=>{
    //   setTimeout(()=>socket.connect(),5000)
    // })
    socket.on('message', (data) => {
      console.log('Received message from server:', data);
    });
    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
    // Don't forget to disconnect the socket when the component unmounts.
    return () => {
      socket.disconnect();
    };
  }, []);
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }
  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <div className='logo'>
      <h1>ZapChat</h1>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
