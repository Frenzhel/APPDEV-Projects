import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from './products.json';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Home() {
    const [currentProduct, setCurrentProduct] = useState(0);
    const product = products[currentProduct];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProduct(prevProduct => (prevProduct + 1) % products.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  
  const handleNextProduct = () => {
    setCurrentProduct((prevProduct) => (prevProduct + 1) % products.length);
  };

  const handlePrevProduct = () => {
    setCurrentProduct((prevProduct) => (prevProduct - 1 + products.length) % products.length);
  };

  return (
    <div className="content-container">
      <h1>KeyStaxx</h1>
      <p>Welcome to KeyStaxx where precision meets performance in every keystroke.
            At KeyStaxx, we craft high-performance gaming keyboards designed for players 
            who demand nothing but the best. Whether you're a casual gamer, an esports pro, or 
            a keyboard enthusiast, our custom-built boards are engineered to give you the edge 
            in every game.Explore our wide selection of cutting-edge mechanical switches, ergonomic 
            designs, and customizable features that elevate your gaming experience to new heights. 
            From lightning-fast key responses to vibrant RGB lighting, every product is designed with 
            passion, precision, and innovation in mind.Join our community of gamers and elevate your 
            setup today because your keyboard is more than just a tool; it's your gateway to victory.
        </p>
      <div className="product-navigation">
        <div className="product-display">
          <div className="img-container">
            <button className="prev-button" onClick={handlePrevProduct}><FaArrowLeft /></button>
            <Link to={`/products/${product.id}`}>
              <img
                className='home-img'
                src={product.image}
                alt={product.name}
                width="200"
              />
            </Link>
            <button className="next-button" onClick={handleNextProduct}><FaArrowRight /></button>
            <div className="product-name"><h2>{product.name}</h2></div>
            <div className="product-price"><h2>${product.price}</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
}
