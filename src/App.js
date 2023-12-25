import './App.css';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';
import Pro from './Components/Pro';
import Normal from './Components/Normal';
import Watch from './Components/Watch';
import Productgrid from './Components/Products/Productgrid';
import Carousel from './Components/Carousel';
import Pagedetail from './Components/Pagedetail';
import Footer from './Components/Footer';
import End from './Components/End';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Offer />
      <Pro />
      <Normal />
      <Watch />
      <Productgrid />
      <Carousel />
      <Pagedetail />
      <Footer />
      <End />
    </div>
  );
}

export default App;
