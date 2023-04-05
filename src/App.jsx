import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/footer.scss';
import './styles/contact.scss'; 
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Services from './components/Services';


import './styles/mediaquery.scss'; 


function App() {
  return (
   <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/services' element={<Services/>}  />
        <Route path='*' element={<div>Page not found</div>}  />
        
      </Routes>
      <Footer/>
   </Router>
  );
}

export default App;
