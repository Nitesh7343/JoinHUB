import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Sessions from './pages/Sessions.jsx'
import SessionDetails from './pages/SessionDetails.jsx'
import {Routes, Route} from 'react-router-dom'
import DashboardHome from './pages/dashboard/DashboardHome.jsx'
import DashboardLayout from './pages/dashboard/DashboardLayout.jsx'
import UpcomingSessions from './pages/dashboard/UpcomingSessions.jsx'
import PastSessions from './pages/dashboard/PastSessions.jsx'
import Profile from './pages/dashboard/Profile.jsx'
import OrganizeSession from './pages/dashboard/OrganizeSession.jsx'

const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = '/sessions' element = {<Sessions/>}/>
      <Route path = '/session/:id' element = {<SessionDetails/>}/>
      <Route path = 'create-session' element = {<OrganizeSession/>}/>
      <Route path = '/dashboard' element = {<DashboardLayout/>}>
          <Route index element = {<DashboardHome/>}/>
          <Route path="upcoming" element={<UpcomingSessions />} />
          <Route path="past" element={<PastSessions />} />
          <Route path="create-session" element={<OrganizeSession />} />
          <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
