// import React from 'react';
import './Location.css';
import { Link } from 'react-router-dom';

const ChooseLocation = () => {
  return (
    <div className="loc">
    <div className="choose-location">
      <h1 className='head4556' >Choose your Location</h1>
      <div className="box-con">
      <Link to="/kerala"><div className="bo bbox1">KERALA</div></Link>
      <Link to="/kashmir"><div className="bo bbox2">KASHMIR</div></Link>
      <Link to="/maharastra"><div className="bo bbox3">MAHARASHTRA</div></Link>
      <Link to="/goa"><div className="bo bbox4">GOA</div></Link>
      </div>
    </div>
    <div className="view-courses-button-container">
         <Link to ='/home'> <button className="view-courses-button">
            Back
          </button></Link> </div>
    </div>
  );
};

export default ChooseLocation;