import React, { useState, useEffect } from "react";
import  './ProductsAndServices.css';


const ProductsAndServices = () => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      });

    fetch("https://api.example.com/services")
      .then(response => response.json())
      .then(data => {
        setServices(data.services);
      });
  }, []);

  return (
    <div>
      <h1>Products and Services</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};



export default ProductsAndServices