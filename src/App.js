import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
let primary = 'no';
const App = () => {
  return (
    <div className="App">
      Simple HTML
      <ul>
        <li className={`app${primary}`}>New item</li>
        <li className={`app${primary}`}>New item2</li>
        <li className={`app${primary}`}>New item3</li>
        <li className={`app${primary}`}>New item4</li>
      </ul>
    </div>
  )
}
// const Welcome = () => <h1>Welcome to IT</h1>
export default App;
// export default Welcome;
