// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import {Link, useNavigate, useNavigation} from "react-router-dom"
import "./Nav.css"
function NavBar() {


    const navigate=useNavigate();
    // eslint-disable-next-line no-unused-vars
    const btnHandler=()=>{
        console.log("first");

         navigate("/first")

    }
    return (  
        <div>
            <div className='nav'>

            <img id='logo' src="https://i.fbcd.co/products/original/76be7b76ff4b7cbd9f870dae94941161660fa9ebbdbb2345e5b5c2f80bcc55c9.jpg" alt="" />
            <Link to="/about">About</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/location">Bookings</Link>
            <Link to="/contact">ContactUs</Link>

            <button id='login' onClick={btnHandler} type='submit'>LogOut</button>
            </div>
        </div>
    );
}

export default NavBar