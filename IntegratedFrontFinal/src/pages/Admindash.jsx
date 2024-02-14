import './Admindash.css'; // Import your CSS file for styling if needed
import { Link } from 'react-router-dom';
import boatlogo from '../assets/boatlogo.png';

function Admindash() {
  return (
    <div className="sidebar">
      <div className="brand">AQUA VOYAGE</div>
      <div className="nav-links">

        <Link to="/Bookad">BoatHouse Management</Link>
        <Link to="#">User Management</Link>
        <Link to="/first">Logout</Link>

      </div>
      <div>
        <img src={boatlogo} className="boattt" alt="." />
      </div>
    </div>
    // </div>
  );
}

export default Admindash;