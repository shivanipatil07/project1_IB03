
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
// import LandPage from './Practice/LandPage';


import Headline from './Components/Headline/Headline'
import Gallery from './Components/Gallery/Gallery'
import Chairperson from './Components/Chair-person/Chairperson'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'



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
