
import './App.css';
// import { FaBeer } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';
import Hero  from './components/hero/Hero';
import Header  from './components/header/Header';
import Guide  from './components/guide/guide';
import Meals from './components/meals/Meals'
import Testimonial from './components/testimonial/Testimonial';
import Pricing from './components/pricing/Pricing';
import Feature from './components/features/Feature';
import Cta from './components/cta/Cta'
import Footer from './components/footer/Footer';
import './mediaquery/Mediaquery.css';

function App() {
  return (
    <div className="App">
      
      <Hero/>
      <Guide/>
      <Meals/>
      <Testimonial/>
      <Pricing/>
      <Feature/>
      <Cta/>
      <Footer/>
    </div>
  );
}
export default App;
