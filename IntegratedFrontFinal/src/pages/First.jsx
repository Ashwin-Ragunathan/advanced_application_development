// eslint-disable-next-line no-unused-vars
import React from 'react';
import './First.css';
import { Link } from 'react-router-dom';
const First = () => {
  return (
    <div className='centeredContainer'>
      <section>
        <div className='ha'>
          <p className='centeredText'>AQUA VOYAGE</p>
         <p className='ba'>Set Sail for Seamless Adventure</p>
         <br></br>
         <br></br>
         <br></br><br></br>
         <Link to='/login'> <button className="userbut" type="submit" >
              USER
            </button></Link>
            <br></br>
            <br></br>
            <Link to='/adlogin'><button className="Adminbut" type="submit" >
              ADMIN
            </button></Link>
        </div>
      </section>
    </div>
  );
};

export default First;