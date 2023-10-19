import logo from './logo.svg';
import './App.css';
import './Pages/Perks/perks';
import Perks from './Pages/Perks/perks'
import ApplicationForm from './Pages/Application/application_form'
import TechstackAndInterns from './techstack_interns/TechstackAndInterns';



function App() {
  return (
    <div className="App">
      
      /**
      * Please create main page for this one ty
       */
      <Perks/>
      <TechstackAndInterns/>
    /**
     */
    </div>
  );
}

export default App;
