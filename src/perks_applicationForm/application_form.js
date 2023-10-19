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
import resume from './assets/icons/upload.png'

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

        <div className='outerCont' id='apply'>
            <h4 className='headerWeight t-lg'>BE AN INTERN AT <span className='t-lg color-main'>MYT</span></h4>
            <div className='formContainer'>
                <h4 className='header-normal'>INTERNSHIP APPLICATION FORM</h4>
                <form onSubmit={handleSubmit} className='form'>

                    {/* FIRST ROW */}
                    <div className='first-row'>
                        <div className="input-field">
                            <img src={user} alt="user" />
                            <input
                                id='name'
                                type="text"
                                placeholder="Name"
                                className="input" />
                        </div>
                        <div className="input-field">
                            <img src={address} alt="user" />
                            <input
                                id='address'
                                type="text"
                                placeholder="Address"
                                className="input" />
                        </div>
                    </div>

                    {/* SECOND ROW */}
                    <div className='second-row flex gap-5'>
                        <div className="input-field">
                            <img src={birthday} alt="user" />
                            <input
                                type="date"
                                id="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                                className="input" />
                        </div>
                        <div className="input-field">
                            <img src={phone} alt="user" />
                            <input
                                id='contact'
                                type="tel"
                                placeholder="Contact"
                                className="input" />
                        </div>
                        <div className="input-field">
                            <img src={email} alt="user" />
                            <input
                                id='email'
                                type="email"
                                placeholder="Email"
                                className="input text-gray" />
                        </div>
                    </div>


                    {/* THIRD ROW */}
                    <div className='third-row'>
                        <div className="input-field">
                            <img src={course} alt="user" />
                            <input
                                type="text"
                                id="course"
                                placeholder="Course"
                                className="input" />
                        </div>
                        <div className="input-field">
                            <img src={university} alt="user" />
                            <input
                                id='uni'
                                type="text"
                                placeholder="University"
                                className="input" />
                        </div>
                        <div className="input-field">
                            <img src={resume} alt="user" />
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
        </div >

    );
}

export default Form;
