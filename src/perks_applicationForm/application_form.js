/**
 * @Author Azeneth01 (June Azeneth M. Suco)
 * Hero and Who We Are Section
 * @returns app
 */

//styles import
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//icons import
import user from './assets/icons/user.png'
import address from './assets/icons/location.png'
import birthday from './assets/icons/date-of-birth.png'
import phone from './assets/icons/call.png'
import email from './assets/icons/mail.png'
import course from './assets/icons/learning.png'
import university from './assets/icons/college.png'
import resume from './assets/icons/upload.png';
import Logo from './assets/images/moduleZeroLogo.png';


import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        birthdate: '',
        contact: '',
        email: '',
        course: '',
        university: '',
        resume: null,
    });

    const updateSelectedFile = (e) => {
        const selectedFile = e.target.files[0];
        setFormData({
            ...formData,
            resume: selectedFile,
        });
    };


    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        // For file input (resume)
        if (type === 'file') {
            setFormData({
                ...formData,
                [name]: files[0], // Store the file object
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle the form data submission here
    };

    return (
        <div className='formContainer'>
            <h4 className='header-normal'>INTERNSHIP APPLICATION FORM</h4>
            <form onSubmit={handleSubmit} className='form'>

                {/* FIRST ROW */}
                <div className='row'>
                    <div className="input-field col">
                        <img src={user} alt="user" className='icons' />
                        <input
                            id='name'
                            type="text"
                            placeholder="Name"
                            className="input" />
                    </div>
                    <div className="input-field col">
                        <img src={address} alt="user" className='icons'/>
                        <input
                            id='address'
                            type="text"
                            placeholder="Address"
                            className="input" />
                    </div>
                </div>

                {/* SECOND ROW */}
                <div className='row'>
                    <div className="input-field col">
                        <img src={birthday} alt="user" className='icons'/>
                        <input
                            type="date"
                            id="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            className="input" />
                    </div>
                    <div className="input-field col">
                        <img src={phone} alt="user" className='icons'/>
                        <input
                            id='contact'
                            type="tel"
                            placeholder="Contact"
                            className="input" />
                    </div>
                    <div className="input-field col">
                        <img src={email} alt="user" className='icons'/>
                        <input
                            id='email'
                            type="email"
                            placeholder="Email"
                            className="input text-gray" />
                    </div>
                </div>


                {/* THIRD ROW */}
                <div className='row'>
                    <div className="input-field col">
                        <img src={course} alt="user" className='icons'/>
                        <input
                            type="text"
                            id="course"
                            placeholder="Course"
                            className="input" />
                    </div>
                    <div className="input-field col">
                        <img src={university} alt="user" className='icons'/>
                        <input
                            id='uni'
                            type="text"
                            placeholder="University"
                            className="input" />
                    </div>
                    <div className="input-field col">
                        <img src={resume} alt="user" className='icons'/>
                        <input
                            id='resume'
                            type="file"
                            placeholder="Resume"
                            className="input resume-input invisible" />

                        <label className='resume-label' htmlFor="resume">Upload Resume <span className='text-red-500'>*</span></label>
                    </div>
                </div>
                <div className='button-container'>
                    <button className='button' type="submit">SUBMIT APPLICATION</button>
                </div>
            </form>
        </div >
    );
}

export default Form;
