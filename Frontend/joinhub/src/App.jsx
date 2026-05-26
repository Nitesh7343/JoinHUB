import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Login" element = {<Login/>}/>
      <Route path = "/Signup" element = {<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
