// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import First from './pages/First'
// import Navbar from './component/nav'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Location from './pages/Location'
import Kerala from './pages/Kerala'
import Goa from './pages/Goa'
import Kashmir from './pages/Kashmir'
import Maharastra from './pages/Maharastra'
import Bookings from './pages/Bookings'
import Adlogin from './pages/Adlogin'
import Admindash from './pages/Admindash'
import Bookad from './pages/Bookad'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/first" element={<First/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/kerala" element={<Kerala/>}/>
        <Route path="/goa" element={<Goa/>}/>
        <Route path="/kashmir" element={<Kashmir/>}/>
        <Route path="/maharastra" element={<Maharastra/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/adlogin" element={<Adlogin/>}/>
        <Route path="/Admindash" element={<Admindash/>}/>
        <Route path="/Bookad" element={<Bookad/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App