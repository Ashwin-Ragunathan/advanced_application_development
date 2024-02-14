// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';


// eslint-disable-next-line no-unused-vars
// import user from "./Asserts/user.png";
// import NavBar from './navbar';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  

  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        email,
        password
      });
      console.log(response.data);
      console.log("Login sucessfull");
      navigate('/home');
    }
    catch(error){
      console.error('Login failed',error);
    }
  };
  return (
    <div className='bod-log'>
      <div className="login-container2">
        {/* <NavBar /> */}
        <div className="login-card">
          <div className="login">
            <h2>User Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              placeholder='Enter your Email'
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <input
              type="password"
              id="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

           
          
              <button className='butt-user' type="submit" >
                Log In
              </button>
         
            <br></br>
            <div className="new">
              <p className="link-text">
               New here? <br></br><Link to="/signup">Create account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;