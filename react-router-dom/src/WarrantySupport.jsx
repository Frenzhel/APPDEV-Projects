import React from 'react';
import NavBar from './Navbar';

export default function WarrantySupport() {
  return (
    <div className="full-width">
      <h2>Warranty and Support</h2>
    <NavBar />
      <p><strong>Warranty Period:</strong> 2 years from the date of purchase.</p>
      <h3>Customer Support</h3>
      <ul>
        <li><strong>Support Email:</strong> <a href="mailto:support@keyboardcompany.com">support@keyboardcompany.com</a></li>
        <li><strong>Support Hotline:</strong> 1-800-555-1234</li>
        <li><strong>Manufacturer's Website:</strong> <a href="http://www.keyboardcompany.com" target="_blank" rel="noopener noreferrer">www.keyboardcompany.com</a></li>
      </ul>
      <p>Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!</p>
    </div>
  )
}