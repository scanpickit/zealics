import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/NAVBAR/navbar';
import Content from './components/Main/main';
import Service from './components/Services/Service';
import DetailSection from './components/Details/Details';
import ChooseUs from './components/ChooseUs/ChooseUs';
import AboutUs from './components/About-Us/AboutUs';
import Team from './components/Team/Team';
import JobOpenings from './components/JobOpenings/JobOpenings';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <Content/>
      <Service/>
      <DetailSection/>
      <ChooseUs/>
      <AboutUs/>
      <Team/>
      <JobOpenings/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
