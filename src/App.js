//import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar';
import Carousel from './Components/Carousel';
import  Cards from './Components/icons';
import Imgcard from './Components/cardimage';
import Colorcard from './Components/colorpage';
import Axios from './Components/axios';
import Form from './Components/form'; 
import Contact from './Components/contact';
import Footer from './Components/footer';
function App() {
  return (
    <div>
      <Nav/>
      <Carousel/>
      <Cards/>
      <Imgcard/>
      <Colorcard/>
      <Axios/>
      <Form/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
