import logo from './logo.svg';
import './App.css';
import './perks_applicationForm/perks';
import Perks from './perks_applicationForm/perks'
import ApplicationForm from './perks_applicationForm/application_form'
import TechstackAndInterns from './techstack_interns/TechstackAndInterns';
import Footer from './perks_applicationForm/footer';
import Navbar from './perks_applicationForm/navbar';



function App() {
  return (
    <div className="App">
      <Navbar /> 
      
      <TechstackAndInterns/>
      <Perks/>
      <Footer/>
    </div>
  );
}

export default App;
