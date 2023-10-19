//styles import
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Link} from 'react-scroll';

//react component
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Logo from './assets/images/moduleZeroLogo.png'


function NavBar() {
  return (
    <Navbar expand = "lg" className='bg-body-tertiary container-fluid'>
      <img src={Logo} className='navbar-logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} className='nav-links'>About us</Link>
              </li>
              <li class="nav-item">
                <Link to="perks" spy={true} smooth={true} offset={-50} duration={100} className='nav-links'>Internship Perks</Link>
              </li>
              <li class="nav-item">
               <Link to="apply" spy={true} smooth={true} offset={-50} duration={100} className='nav-links'>Apply Now</Link>
              </li>
            </ul>
        </Navbar.Collapse>
    </Navbar> 
  );
}

export default NavBar;