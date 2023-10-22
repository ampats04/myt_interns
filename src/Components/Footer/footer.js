//styles import
import '../../css/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import discordSVG from "../../Assets/svg/discordsvg.svg"
import emailSVG from "../../Assets/svg/emailsvg.svg"
import facebookSVG from "../../Assets/svg/facebooksvg.svg"
import githubSVG from "../../Assets/svg/githubsvg.svg"

import React from 'react';

function Footer() {
    return (
        <div className="container-fluid bg-body-secondary">
            <div className='container pb-3'>
                <div className='grid-container d-flex justify-content-center'>
                    <div class="soc-med-icons d-flex gap-4">
                        <div class="svg-footer-icons">
                            <a href='#'><img src={discordSVG} className='svg-footer-icons' /></a>
                        </div>
                        <div class="svg-footer-icons">
                            <a href='#'><img src={emailSVG} className='svg-footer-icons' /></a>
                        </div>
                        <div class="svg-footer-icons">
                            <a href='https://www.facebook.com/MYTSoftDevSolutions'><img src={facebookSVG} className='svg-footer-icons' /></a>
                        </div>
                        <div class="svg-footer-icons">
                            <a href='#'><img src={githubSVG} className='svg-footer-icons' /></a>
                        </div>
                    </div>
                </div>
                <div class="col d-flex justify-content-center mt-3">
                    <h5 className="footer-font">MYT SoftDev Solutions Incoporated</h5>
                </div>
                <div class="col d-flex justify-content-center">
                    <h6 className="footer-font">Innovative. Intutiative. Powerful.</h6>
                </div>
            </div>
        </div>
    );
}
export default Footer;