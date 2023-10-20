import Carousel from 'react-bootstrap/Carousel';


//Asset Imports
import interns from '../../assets/images/interns.jpg';

function Slider() {
  return (
    <Carousel 
    data-bs-theme="dark"
     >
      <Carousel.Item>
      <div class="row justify-content-center img-margin mt-5">
      <div class="col-12 col-sm-4 col-md-3 col-lg-2 ">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="row justify-content-center img-margin mt-5">
      <div class="col-12 col-sm-4 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="row justify-content-center img-margin mt-5">
      <div class="col-12 col-sm-4 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-6 col-md-3 col-lg-2">
        <img src={interns} alt="" class="img-fluid" />
      </div>
      </div>
      </Carousel.Item>

      
    </Carousel>

    
  );
}

export default Slider;