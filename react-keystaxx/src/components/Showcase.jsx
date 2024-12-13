import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from './products.json';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Showcase() {
    const reviews = [
        { name: "John Doe", feedback: "Amazing craftsmanship! Love my new keyboard." },
        { name: "Jane Smith", feedback: "Great service and exceptional quality!" },
        { name: "Chris Lee", feedback: "The best keyboards I've ever used." },
    ]
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
        <h2>Showcase</h2>
        {reviews.map((review, index) => (
            <div key={index}>
            <h4>{review.name}</h4>
            <p>{review.feedback}</p>
            </div>
        ))}
        </div>
    )
}  