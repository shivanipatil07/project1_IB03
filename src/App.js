
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
// import { IconName } from "react-icons/ai";
// import LandPage from './Practice/LandPage';



import Headline from './react-assign-1/Navbar/Headline/Headline';
import Gallery from './react-assign-1/Navbar/Gallery/Gallery';
import Chairperson from './react-assign-1/Navbar/Chair-person/Chairperson';
import Contact from './react-assign-1/Navbar/Contact/Contact';
import Navbar from './react-assign-1/Navbar/Navbar/Navbar';



function App() {
  return (
    <div>
     
      {/* <LandPage/> */}
   
    <Navbar/>
    <Headline/>
 
    <Gallery/>
    <Chairperson/>
    <Contact/>
    </div>

  

     
     
  );
}


export default App;
