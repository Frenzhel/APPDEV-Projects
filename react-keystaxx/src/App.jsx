import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MissionVision from './components/MissionVision';
import Showcase from './components/Showcase';
import ProductListing from './components/ProductListing';
import ProductManual from './components/ProductManual';
import Reviews from './components/Reviews';
import CompanyProfile from './components/CompanyProfile';
import EmployeeResume from './components/EmployeeResume';
import DeveloperPage from './components/DeveloperPage';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div id='root'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductManual />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<CompanyProfile />} />
          <Route path="/profile/:id" element={<EmployeeResume />} />
          <Route path="/developers" element={<DeveloperPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}