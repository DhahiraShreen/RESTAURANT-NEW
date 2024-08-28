import React from 'react';
import './Menu.css';

const Menu = () => {
  const dishes = [
    { name: 'Spaghetti Carbonara', price: '$12' },
    { name: 'Margherita Pizza', price: '$10' },
    { name: 'Caesar Salad', price: '$8' },
  ];

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            {dish.name} - {dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
