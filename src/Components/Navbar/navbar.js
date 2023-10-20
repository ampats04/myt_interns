//styles import
import '../../css/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

//react component
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Logo from '../../assets/images/moduleZeroLogo.png'


function NavBar() {
  return (
    <Navbar expand = "lg" className='bg-body-tertiary container-fluid'>
      <img src={Logo} className='navbar-logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ma-auto mx-5">
            <Nav.Link className='nav-links'>Home</Nav.Link>
            <Nav.Link className='nav-links'>About us</Nav.Link>
            <Nav.Link className='nav-links'>Internship Perks</Nav.Link>
            <Nav.Link className='nav-links'>Apply now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;