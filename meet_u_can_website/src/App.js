import React from 'react';
import logo from './Toucan.png';
import './App.css';

function App() {
  return (
    <html className="All">
      <p className = "Header">
        MeetUcan
      </p>
      <header className="Logo">
        <img src={logo} 
          className="App-logo" 
          alt="logo" 
        />
        <p>
          You can meet with MeetUcan!
        </p>
      </header>
      <div className = "Box">
        <p>
          insert code here
        </p>
      </div> 
    <div className = "Bottom">

    </div>
    </html>
  );
}

export default App;
