// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from './pages/SignIn'
import SignUp from './pages/Signup'
import First from './pages/First'
// import Navbar from './component/nav'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'

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
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App