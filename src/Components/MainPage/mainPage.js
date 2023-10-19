/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Main Page
 */

import About from "../../Pages/About/about";
import Perks from "../../Pages/Perks/perks";
import TechstackAndInterns from "../../Pages/TechStack_and_Interns/TechstackAndInterns";


export default function MainPage(){

    return(
    <div className="App">
     

    <Perks/>
    <About/>
    <TechstackAndInterns/>
 
  </div>
    )
}