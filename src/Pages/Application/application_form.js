/**
 * @Author Azeneth01 (June Azeneth M. Suco)
 * Hero and Who We Are Section
 * @returns app
 */

//styles import
import '../../css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//assets import
import user from '../../Assets/images/user.png'
import address from '../../Assets/images/location.png'
import birthday from '../../Assets/images/date-of-birth.png'
import phone from '../../Assets/images/call.png'
import email from '../../Assets/images/mail.png'
import course from '../../Assets/images/learning.png'
import university from '../../Assets/images/college.png'
import resume from '../../Assets/images/upload.png'

import React, { useState } from 'react';
import { isLetters, isNumber } from '../../utils/strings';

//
export default function Form() {
    const [formData, setFormData] = useState({
        full_name: '',
        address: '',
        birthdate: '',
        contact: '',
        email: '',
        course: '',
        university: '',
        resume: null,
    });

    const [isValid, setIsValid] = useState(true);
    const [newName, setnewName] = useState(' ');
    const [checkEmail, setcheckEmail] = useState(' ');
    const [checkPhone, setcheckPhone] = useState(' ');


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

    const handleNameChange = (e) => {
        const isNewName = e.target.value;
        const isValidName = isLetters(isNewName);

        setIsValid(isValidName)
        setnewName(isNewName)

        setFormData({

            ...formData,
            full_name: isNewName,
        })
    }

    const handlePhoneChange = (e) => {
        const isPhone = e.target.value;
        const isValidPhone = isNumber(isPhone);

        setIsValid(isValidPhone);
        setcheckPhone(isPhone);

        setFormData({
            ...formData,
            phone: isPhone,

        })
    }

    return (
        <div className='outerCont'>
            <div className='formContainer'>
                <h4 className='header-normal'>INTERNSHIP APPLICATION FORM</h4>
                <form onSubmit={handleSubmit} className='form'>

                    {/* FIRST ROW */}
                    <div className='row'>
                        <div className="input-field col">
                            <img src={user} alt="" className='icons' />
                            <input
                                id='full_name'
                                type="text"
                                value={newName}
                                className={`input ${isValid ? 'valid' : 'invalid'}`}
                                onChange={handleNameChange}
                                placeholder="Name" />
                        </div>
                        <div className="input-field col">
                            <img src={address} alt="user" className='icons' />
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
                            <img src={birthday} alt="user" className='icons' />
                            <input
                                type="date"
                                id="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                                className="input" />
                        </div>
                        <div className="input-field col">
                            <img src={phone} alt="user" />
                            <span>+63</span>
                            <input
                                id='contact'
                                type="number"
                                maxLength={10}
                                placeholder="Contact"
                                value={checkPhone}
                                className={`input ${isValid ? 'valid' : 'invalid'}`}
                                onChange={handlePhoneChange}
                            />
                        </div>
                        <div className="input-field col">
                            <img src={email} alt="user" className='icons' />
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
                            <img src={course} alt="user" className='icons' />
                            <input
                                type="text"
                                id="course"
                                placeholder="Course"
                                className="input" />
                        </div>
                        <div className="input-field col">
                            <img src={university} alt="user" className='icons' />
                            <input
                                id='uni'
                                type="text"
                                placeholder="University"
                                className="input" />
                        </div>
                        <div className="input-field col">
                            <img src={resume} alt="user" className='icons' />
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
        </div>
    );
}

