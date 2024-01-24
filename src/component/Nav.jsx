// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import {Link, useNavigate, useNavigation} from "react-router-dom"
import "./Nav.css"
function NavBar() {


    const navigate=useNavigate();
    const btnHandler=()=>{
        console.log("login");

         navigate("/login")

    }
    return (  
        <div>
            <div className='nav'>

            <img id='logo' src="https://i.fbcd.co/products/original/76be7b76ff4b7cbd9f870dae94941161660fa9ebbdbb2345e5b5c2f80bcc55c9.jpg" alt="" />
            <Link to="/home">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/Blog">Bookings</Link>
            <Link to="/Contact">ContactUs</Link>

            <button id='login' onClick={btnHandler} type='submit'>Login</button>
            </div>
        </div>
    );
}

export default NavBar