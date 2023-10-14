//styles import
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Logo from './assets/images/moduleZeroLogo.png'


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary navBarStyle">
  <div class="container-fluid">
    <a className='navbar-brand' href="#"> <img className='logo' src={Logo} alt="Logo" /> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavBar;
