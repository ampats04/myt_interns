//styles import
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


//assets import
import Accesibility from './assets/images/accesibility.png';
import Allowance from './assets/images/allowance.png';
import Gatherings from './assets/images/gathering.png';
import Mentorship from './assets/images/mentorship.png';
import Picture from './assets/images/picBg.png'

//components import
import NavBar from './navbar';
import Form from './application_form'
import Footer from './footer'

function Perks() {
    return (
        <div>
            <div className='perksContainer' id='perks'>
                <h4 className='headerWeight t-lg'>INTERNSHIP <span className='t-lg color-main'>PERKS</span></h4>
                <div className='cardContainer'>
                    <div className='card'>
                        <h5 className='cardTitle color-accent t-md t-bold'>MENTORSHIP</h5>
                        <img className='image' src={Mentorship} alt="" />
                        <p className='cardContent color-accent'>In mentoring, we don't just teach, we inspire growth.</p>
                    </div>
                    <div className='card'>
                        <h5 className='cardTitle color-accent t-md t-bold'>ALLOWANCE</h5>
                        <img className='image' src={Allowance} alt="" />
                        <p className='cardContent color-accent'>In mentoring, we don't just teach, we inspire growth.</p>
                    </div>
                    <div className='card'>
                        <h5 className='cardTitle color-accent t-md t-bold'>ACCESIBILITY</h5>
                        <img className='image' src={Accesibility} alt="" />
                        <p className='cardContent color-accent'>In mentoring, we don't just teach, we inspire growth.</p>
                    </div>
                    <div className='card'>
                        <h5 className='cardTitle color-accent t-md t-bold'>GATHERINGS</h5>
                        <img className='image' src={Gatherings} alt="" />
                        <p className='cardContent color-accent'>In mentoring, we don't just teach, we inspire growth.</p>
                    </div>
                </div>
            </div>

            <div className='background-pic'>
                <Form className='absolute' />
            </div>
        </div>
    );
}

export default Perks;
