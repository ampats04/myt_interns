/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Main Page
 */

import About from "../../pages/About/about";
import Perks from "../../pages/Perks/perks";
import TechstackAndInterns from "../../pages/TechStack_and_Interns/TechstackAndInterns";


export default function MainPage(){

    return(
    <div className="App">
     

    <Perks/>
    <About/>
    <TechstackAndInterns/>
 
  </div>
    )
}