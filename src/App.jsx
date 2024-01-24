// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignIn from './pages/SignIn'
import SignUp from './pages/Signup'
// import Navbar from './component/nav'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App