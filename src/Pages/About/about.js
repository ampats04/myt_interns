



/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * About us
 */

//Stytle Imports
import '../About/about_styles.css'


//Asset Imports
import Logo from '../../Assets/images/moduleZeroLogo.png'

export default function About(){


    return (
        <div class="row align-items-center">
        <div class="col-6">
          <img src = {Logo} alt =''/>
        </div>
        <div class="col-6">
          <p className = 'par'>The Module Zero internship program aims to train 
            young professionals in the field of software technology where they will be trained and taught in the different 
            pathways of the program such as Design, Project Management, Software Development, and Quality Assurance.</p>
        </div>
      </div>
    )
}