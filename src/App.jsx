import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';
import AOS from 'aos';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Terms from './pages/TermsService';
import Benefits from './components/Benefits';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroHome from './components/HeroHome';
import Suscription from './pages/Suscription';
import JoinWaitlist from './pages/JoinWaitlist';
import JoinSection from './components/JoinSection';
import Price from './components/Price';





function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/herohome" element={<HeroHome />} />
        <Route path="/joinsection" element={<JoinSection />} />
        <Route path="/price" element={<Price />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/suscription" element={<Suscription />} />
        <Route path="/joinwaitlist" element={<JoinWaitlist />} />
      </Routes>
    </>
  );
}

export default App;
