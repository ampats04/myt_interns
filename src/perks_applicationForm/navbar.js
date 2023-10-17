//styles import
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

//react component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Logo from './assets/images/moduleZeroLogo.png'


function NavBar() {
  return (
    <Navbar expand = "lg" className='bg-body-tertiary container-fluid'>
      <img src={Logo} className='navbar-logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ma-auto mx-5">
            <Nav.Link class="nav-links" href="#link">Home</Nav.Link>
            <Nav.Link class="nav-links" href="#link">About us</Nav.Link>
            <Nav.Link class="nav-links" href="#link">Internship Perks</Nav.Link>
            <Nav.Link class="nav-links" href="#link">Apply now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
