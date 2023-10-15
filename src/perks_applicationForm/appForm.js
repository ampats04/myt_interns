//styles import
import './sstyles.css'


//icons import
import user from './assets/icons/user.png'
import address from './assets/icons/location.png'
import birthday from './assets/icons/date-of-birth.png'
import phone from './assets/icons/call.png'
import email from './assets/icons/mail.png'
import course from './assets/icons/learning.png'
import university from './assets/icons/college.png'
import resume from './assets/icons/upload.png'

//components import
import NavBar from './navbar';
import Form from './application_form'

function AnotherForm() {
    return (
        <div className='container'>
            <h4>INTERNSHIP APPLICATION FORM</h4>
            <form action="">
                <div className='row myrow'>
                    <div className='col'>
                        <img src={user} alt="user" className='icon'/>
                        <input
                            type="text"
                            id='name'
                            placeholder='Name' />
                    </div>
                    <div className='col'>
                        <img src={address} alt="address" className='icon'/>
                        <input
                            type="text"
                            id='address'
                            placeholder='Address' />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <img src={birthday} alt="birthday" className='icon'/>
                        <input
                            type="date"
                            id='birthdate' />
                    </div>
                    <div className='column'>
                        <img src={phone} alt="phone" className='icon'/>
                        <input
                            type="tel"
                            id='phone'
                            placeholder='Phone' />
                    </div>
                    <div className='column'>
                        <img src={email} alt="email" className='icon'/>
                        <input
                            type="email"
                            id='email'
                            placeholder='Email' />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <img src={course} alt="course" className='icon'/>
                        <input
                            type="text"
                            id='course'
                            placeholder='Course' />
                    </div>
                    <div className='column'>
                        <img src={university} alt="university" className='icon'/>
                        <input
                            type="text"
                            id='university'
                            placeholder='University' />
                    </div>
                    <div className='column'>
                        <img src={resume} alt="upload" className='icon'/>
                        <label htmlFor="resume">Upload Resume <span> *</span></label>
                        <input
                            type="file"
                            id='resume'/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AnotherForm;
