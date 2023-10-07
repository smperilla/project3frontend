import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';


function App() {

  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
