import 'bootstrap/dist/css/bootstrap.min.css';
import './technology_stack.css';
import Slider from '../../Components/Carousel/slider';


// images
import frontEnd from '../../Assets/images/frontEnd.jpg';
import backEnd from '../../Assets/images/backEnd.jpg';
import databaseServer from '../../Assets/images/databaseServer.jpg';
import Others from '../../Assets/images/others.jpg';
import img1 from '../../Assets/images/img1.jpg';
import img2 from '../../Assets/images/img2.jpg';
import img3 from '../../Assets/images/img3.jpg';
import img4 from '../../Assets/images/img4.jpg';

function TechstackAndInterns() {
    return (
      
      <div class="container App">
      <h1 class="techstack-header ">TECHNOLOGY STACK</h1>


      <div class="row justify-content-center img-margin">
      <div class="col-12 col-sm-4 col-md-3 col-lg-2">
        <img src={frontEnd} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={backEnd} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={databaseServer} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={Others} alt="" class="img-fluid" />
      </div>
      </div>

      
  
      <div class="row justify-content-center mt-6">
      <div class="col-12 col-sm-4 col-md-3 col-lg-2">
        <img src={img1} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={img2} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={img3} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={img4} alt="" class="img-fluid" />
      </div>
      </div>
  
      <div>
      <h2 class="meettheinterns-header"> MEET THE <span class='intern-color'>INTERNS</span></h2>
    </div>
  
    
    <div>
      <Slider/>
    </div>
  
      
      </div>
      
      
    );
  }
  
  export default TechstackAndInterns;