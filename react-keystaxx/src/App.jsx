import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import MissionVision from "./components/MissionVision";
import Showcase from "./components/Showcase";
import ProductListing from "./components/ProductListing";
import ProductManual from "./components/ProductManual";
import Reviews from "./components/Reviews";
import CompanyProfile from "./components/CompanyProfile";
import EmployeeResume from "./components/EmployeeResume";
import DeveloperPage from "./components/DeveloperPage";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div id="root">
      {isLoading && <Loading />}
      <CartProvider>
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
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </CartProvider>
      <Footer />
    </div>
  )
}