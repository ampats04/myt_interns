//styles import
import '../../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


//assets import
import Accesibility from '../../Assets/images/accesibility.png';
import Allowance from '../../Assets/images/allowance.png';
import Gatherings from '../../Assets/images/gathering.png';
import Mentorship from '../../Assets/images/mentorship.png';

//components import
import Form from '../../Pages/Application/application_form';

function Perks() {
    return (
        <div>
            <div className='perksContainer'>
                <h4 className='headerWeight t-lg'>INTERNSHIP <span className='t-lg color-main'>PERKS</span></h4>
                <div className='cardContainer'>
                    <div className='card-item'>
                        <h5 className='cardTitle color-accent t-md t-bold'>MENTORSHIP</h5>
                        <img className='image' src={Mentorship} alt="" />
                        <p className='cardContent color-accent'>In mentoring, we don't just teach, we inspire growth.</p>
                    </div>
                    <div className='card-item'>
                        <h5 className='cardTitle color-accent t-md t-bold'>ALLOWANCE</h5>
                        <img className='image' src={Allowance} alt="" />
                        <p className='cardContent color-accent'>The right internship allowance ensures that talent doesn't go untapped.</p>
                    </div>
                    <div className='card-item'>
                        <h5 className='cardTitle color-accent t-md t-bold'>ACCESIBILITY</h5>
                        <img className='image' src={Accesibility} alt="" />
                        <p className='cardContent color-accent'>Internships that offer access to projects and events pave the way for growth.</p>
                    </div>
                    <div className='card-item'>
                        <h5 className='cardTitle color-accent t-md t-bold'>GATHERINGS</h5>
                        <img className='image' src={Gatherings} alt="" />
                        <p className='cardContent color-accent'>Fueling collaboration one meal at a time.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h4 className='headerWeight t-lg'>BE AN INTERN AT <span className='t-lg color-main'>MYT</span></h4>
                <div className='background-pic'>
                    <Form className='absolute' />
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Perks;
