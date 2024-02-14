// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="body41">
      <div className="head1">
      {/* <img id='logo' src="https://i.fbcd.co/products/original/76be7b76ff4b7cbd9f870dae94941161660fa9ebbdbb2345e5b5c2f80bcc55c9.jpg" alt="" /> */}

        <center>
          <h1 className='ashhh'>AQUA VOYAGE</h1>
          <p>Sail into Serenity: Your Premier Destination for Effortless Boat House Getaways</p>
        </center>
      </div>
      <div className="para67">
        <br />
      
        <br />
        <p>
          Embark on a journey of aquatic elegance with our boat house booking application. Discover the magic of waking up to the gentle lapping of waves and the breathtaking views of the water. Effortlessly book your floating retreat, where every detail is designed for your comfort and convenience. Whether you are seeking a romantic getaway or a family adventure, our application opens the happy door to a world of nautical indulgence. Cast off the stress of planning and let the tides of relaxation guide you to your perfect destination. From luxury amenities to panoramic views, our boat houses redefine waterfront living. Secure your spot on the pure water, where every reservation is a ticket to an unforgettable experience. With just a click, you can set sail for tranquility, making memories that will linger like the echoes of seagulls over the horizon. Do not just stay; float in style with our boat house booking app – where every booking becomes a passport to aquatic bliss.
        </p>
        <div className="list1">
          <center>
            <ul>
              <li>Instant BoatHouse Booking</li>
              <li>Guaranteed Comfort</li>
              <li>100% Cancellation</li>
              <li>Cheap plans</li>
            </ul>
          </center>
        </div>
        <br />
       
        <div className="lo">
         
        </div>
        <div className="mine012">
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;