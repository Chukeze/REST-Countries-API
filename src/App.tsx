import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Home from './views/home/Home'

function App () {
  //To do: 
  ////1. Change render from <Home/> to a Use state logic to determine which view is shown Home or Selected
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
