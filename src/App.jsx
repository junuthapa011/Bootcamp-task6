import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Arr=[["John", "Julie"],["Sarah", "Sabina"],["David", "Deena"],["Peter", "Penelope"]]

  let finalArr =[]
  
   for(let i=0; i<Arr.length;i++){
      finalArr[i]=<div className="array"><li><h3>{Arr[i].join("&")}</h3> ipsum dolor sit amet consectetur adipisicing elit. Corporis, at ab velit, mollitia officia hic libero facilis voluptate unde harum esse quo laborum quis, molestias repudiandae magnam qui labore fugit.</li></div>
   }
  

  return (
    <>
      <div className="header"><header><h1>Dance Fever</h1></header></div>
      <nav>
        <a href = "index.html">Home</a>
        <a href = "index.html">Choreographers</a>
        <a href = "index.html">Events</a>
        <a href = "index.html">About</a>
      </nav>
      <div className = "main">
        <h1>Get to know our best Choreographers!!</h1>
        {finalArr}</div>
      <div className="footer"><footer>Copyright &copy; 2023 <a href ="mailto:junuthapa011@gmail.com">Contact Us</a> </footer></div>
    
     
    </> 
  )
}

export default App
