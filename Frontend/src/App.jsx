import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Sessions from './pages/Sessions.jsx'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = '/sessions' element = {<Sessions/>}/>
    </Routes>
    </>
  )
}

export default App
