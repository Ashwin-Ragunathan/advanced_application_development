/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
// import "./Home.css"
// import NavBar from '../component/nav'
// import Pricing from '../component/Pricing'


// function Home() {
//   return (
//     <div>
//         <NavBar/>
//         <div className="image-container">
//           <div className="text-overlay">
//           <div className='head4'>
//         <i> <h2 id='title5'>AQUA VOYAGE</h2><br></br></i>
        
//           </div>

//           </div>
//           <img src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Example"className="zoom-image" />
//         </div>
//         <div className="pricing-container" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
//         <Pricing/></div>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import "./Home.css";
import NavBar from '../component/nav';
import Pricing from '../component/Pricing';

function Home() {
  return (
    <div>
      <NavBar />
      <div className="image-container">
        <div className="text-overlay">
          <div className='head4'>
            <i><h2 id='title5'>AQUA VOYAGE</h2><br /></i>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Example" className="zoom-image" />
      </div>
      <div className="pricing-container">
  <Pricing />
</div>
    </div>
  );
}

export default Home;
