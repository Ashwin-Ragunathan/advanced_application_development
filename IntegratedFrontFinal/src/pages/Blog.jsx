// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Blog.css';
import { Link } from 'react-router-dom';
// import blogbg from '../pics/blogbg.jpg';

export default function Cources() {
  // eslint-disable-next-line no-unused-vars
  const handleViewCoursesClick = () => {
    // Add any logic you want to execute when the "View Courses" button is clicked
    console.log('View Courses button clicked');
  };
  return (
    
    <div>
        {/* <img src={blogbg}></img> */}
        <div className="bod_body">
        <div className="ev">
          <h2>Blogs We Have</h2>
          </div>
        <div className="event__section">
          <div className="event__card">
          <p>June 26, 2023</p>
            <p>Kerala Houseboats – Choosing the Best Option for a Romantic Stay</p>
            
            
          </div>
          <div className="event__card">
            <p>June 26, 2023</p>
            <p>Unforgettable Experiences: Exploring Alleppey’s Houseboat Options for a Dream Vacation</p>
            
          </div>
          <div className="event__card">
          <p>August 19, 2020</p>
            <p>Dal lake Houseboat Holidays: Pricing, Packages, and Booking Information were Good</p>
            
          </div>
          <div className="event__card">
          <p>June 08, 2023</p>
            <p>Family-Friendly Kerala Houseboat Packages and Creating Lasting Memories on the Water</p>
           
          </div>
          <div className="event__card">
          <p>January 30, 2021</p>
            <p>Renting a Goa Boat House: Cost Breakdown and Per Day Rates were Awesome</p>
            
          </div>
          <div className="event__card">
          <p>July 07, 2018</p>
            <p>Alleppey Houseboat Rates for a Memorable 1-Day Trip: All You Need to Go</p>

            </div>
          <div className="event__card">
          <p>April 26, 2019</p>
            <p>2-Day Kerala Houseboat Package: Unforgettable Waterway Journey</p>

            </div>
          <div className="event__card">
          <p>October 20, 2023</p>
            <p>Discovered the Magic of kashmir’s Backwaters: Choosed the Perfect Houseboat</p>
            
            
          </div>
          
        </div>
        <br></br>
        <div className="view-courses-button-container">
         <Link to ='/home'> <button className="view-courses-button">
            Back to Home
          </button></Link> </div>
        </div>
        


    </div>
  )
}